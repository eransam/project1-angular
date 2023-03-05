import { Component, OnInit , Input ,Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

    // משתנה בוליאני שלא הוזן לו ערך הוא יהיה שווה לשקר
    //כאשר אנו מצהירים את פונ זו על משתנה זה אומר שהוא יכול לקבל ערך מקומפוננטות אשר מזמנות את הקומפוננטה הנוכחית @Input()
    // זה אותו פעולה של פרופס בריאקט
    // :isFavorite דוג' לקומפוננטה אשר קוראת לקומפוננטה הנוכחית ומכניסה לנו ערך למשתנה 
    //יהיה שווה לאמת appשל ה  Ts אשר נמצא בקובץ ה post.isFavorite במקרה שלנו הערך של   <app-favorite [isFavorite]="post.isFavorite"></app-favorite>
    //את הערך אמת FavoriteComponent של הקומפוננטה  isFavorite וכך אנו מחדיר למשתנה 
    // שווה ערך לקומפוננטה שמקבל פרופ מהאבא בריאקט
    //    אנו יכולים גם לתת כינוי לשדה זה כך, דבר זה עוזר במידה ושם המשתנה משתה אז הפרופס שלנו עדיין ישאר בשם קבוע @Input("is-favirite") isFavorite: boolean;
    //כך אנו נקרא לו כפרופס "isFavorite"
    @Input("isFavorite") isSelected: boolean;
    //Output אשר יודע להוציא מידע החוצה בשל הפקודה  change נותנת לנו ליצור איבנטים מותאמים אישית לדוג פה אנו יוצרים איבנט בשם   EventEmitter 
    //אנו יכולים גם פה לתת שם קבוע לקריאה של האיבנט הזה @Output("the-change") change = new EventEmitter();
    @Output() change = new EventEmitter();


    onClick(){
        // כאן אנו יוצרים פונ שבמידה והיוזר הלחץ על הכוכב אז המשתנה שלנו ישנה את ערכו הבוליאני
        this.isSelected =!this.isSelected;
        //emit את הפקודה  change וכאן בעת ריצה של הפונ הזאת האיבנט שיצרנו יפלוט החוצה למי שקרא לאיבנט
        //בקומפוננטה אשר זימנה את האיבנט הזה change היא פקודה אשר מפעילה את הפונקציונליות והפקודות אשר יהיהו בתוך איבנט ה emit
        //emit אנו יכולים גם לשלוח דאטה בעזרת ה
        this.change.emit(this.isSelected)
    }
    constructor(){}
    ngOnInit(): void {
        console.log("test: " , this.isSelected);

    }



}





