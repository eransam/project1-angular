import { Directive ,HostListener ,ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
    //כדי לקצר את הקוד בתגית שמזמנת את הדיירקטיב אנו נותנים למשתנה שלנו מזהה שהוא השם של הדיירקטיב 
    // וכך אנו נוכל לתת ערך למשתנה שלנו במסגרת הקריאה לדיירקטיב כך:
    //app.component.html התג בa <input type="text" [appInputFormat]="'uppercase'">
    @Input('appInputFormat') format;
    // פה אנו מזמנים סרויסים שהקומפוננטה שלנו תלויה בהם
// ואנו יכולים גם ליצור בתוכו משתנים בדרך יוצר מקוצרת
  constructor(private el: ElementRef) { }

    @HostListener('focus') onFocus(){
        console.log("on Focus");
    }
    // "blur" refers to an event that occurs when an element loses focus
    @HostListener('blur') onBlur(){
        console.log("on blur");
        let value: string = this.el.nativeElement.value;
        if (this.format == 'lowercase') {
            this.el.nativeElement.value = value.toLocaleLowerCase();
        }else{
            this.el.nativeElement.value = value.toUpperCase();
        }
    }



}
