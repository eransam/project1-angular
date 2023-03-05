import { Component, NgModule } from '@angular/core';
import { CoursesService } from '../Services/courses.service';

@Component(
    {
        selector:'courses',
        // בעזרת סוגריים כפולים אנו יכולים להציג משתנה מהקלאס
        template:`<h2>{{title}}</h2>
        <ul>
            <!--הוא לולאת פור רגילה שאנו עושים על המערך שלנו  ובעזרת הסוגריים הכפולים אנו מציגים כל סיבוב אובייקט מהמערך שלנו כך: *ngFor הדיירקטיב  -->
            <li *ngFor="let coures of courses">{{coures}}</li>
        </ul>
        <!--ואם הוא יהיה שווה לאמת הוא יופיע ואם יהיה שווה לשקר הוא יעלם, צורת הכתיבה הזו מאפשרת לנו להעביר נתונים מהגאווה סקריפט לדום active כאן אנו מוסיפים לתג עוד קלאס בשם  -->
        <button class = "btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive? 'blue' : 'red'">save</button>
        <div (click)="onDivClicked()">
        <br>
        <!-- דוג' להצגת נתונים על האובייקט -->
        <button (click)="onSave($event)">save2</button>
        </div>
        

        <!-- דרך ראשונה להעביר מידע -->
        <!--פונ אשר ברגע שיוזר ממלא את האינפוט ולוחץ אנטר היא מפעילה פונקציה מסויימת (keyup.enter) -->
        <input (keyup.enter)="onKeyUpExample1($event)"/>
        <br>
        <!-- דרך שנייה להעביר מידע -->
        <!--כפרמטר לפונ שמציגה אותו email.value לתת איידי לתג ולאחר מכן להעביר את ה -->
        <input #email (keyup.enter)="onKeyUpExample2(email.value)"/>

        <br>
        <!--ומצביעים על משתנה שיצרנו [(ngModel)] הדרך השלישית היא טו וואי ביידינג שזה אומר שאנו מתקשרים מהסקריפט שלנו לדום בעזרת הפקודה -->
        <!-- וכך הערך של התיבה יהיה ערך המשתנה ואנו נוכל לשנות את הערך של המשתנה הזה גם מהדום וגם מהסקופ -->
        <!--(import { FormsModule } from '@angular/forms';) app.module כדי להשתמש עם פקודה זו אנו צריכים להכניס את המודול ל -->
        <input [(ngModel)]="email3" (keyup.enter)="onKeyUpExample3()"/>
        <!-- כאן קראנו שפייפ הקיים במערכת אשר לוקח את הערך שאנו רוצים להציג ומציג אותו באותיות גדולות, בצורה הזו אנו קוראים לפייפים ותפקידם הוא לקחת ערך ולעשות עליו מניפולציה כלשהיא ולהחזירו -->
        <p>{{oneCourse.title | uppercase}}</p>

        <!-- כאשר אנו יוצרים קובץ פייפ ומזינים אותו באפ מודול הוא תקף לכל בקומפונטות שלנו בפרוייקט ואנו לא צריכים לייבא אותו ופה קראנו לפייפ שיצרנו והכנסו לו פרמטר  -->
        <p>{{text | summary:10}}</p>



        `
    })
    export class CoursesComponent{


        text = "hi how are you, my name is eran samimian and i 31 years old"
        oneCourse = {
            title:"js",
            price: 20000
        }

        email3 ="eran@.com"
        onKeyUpExample1($event){
            //כך אנו מחלצים את הערך שהזין היוזר בתיבת האינפוט $event.target.value
            console.log($event.target.value);
            
        }

            //דרך שנייה להעביר מידע
        onKeyUpExample2(email){
            console.log(email);            
        }

        onKeyUpExample3(){
            //כך אנו מחלצים את הערך שהזין היוזר בתיבת האינפוט $event.target.value
            console.log(this.email3);
            
        }

        //(click) מראה נתונים על האיבנט שלנו ובמקרה שלנו האיבנט הוא  $event
        onSave($event){
            // זוהי פונ מובנת אשר עוצרת את ביעבוע האיבנט קליק שלנו לתגים אחרים אשר עוטפים את התג הקורה לאיבנט
            //לא תופעל במידה ונלחץ על הכפתור שלנו למרות שהיא עוטפת את הכפתור div (click)="onDivClicked() במקרה שלנו בגלל ששמנו את הפונ הזו הפונ
            $event.stopPropagation();
            console.log("button was clicked: the $event is: " , $event);
        }

        onDivClicked(){
            console.log("div was clicked");
            

        }
        //יהיה שקר אז הוא יעלם מהתג isActiveהתווסף לתג ובמידה וה active כאשר זה יהיה אמת הקלאס
        isActive = true;
        title = "List of courses";
        courses;

        // / בתוך הסוגריים של הקונסטרקטור אנו נכניס את כל הפונקציות שהקלאס שלנו תלוי בהם ובמקרה שלנו אנו לתוך הקונסטרקטור את הסרויס שלנו כדי להכיל לתוך המשתנה שלנו את רשימת הקורסים
        constructor(service:CoursesService){
            this.courses = service.getCourses();
        }
    }