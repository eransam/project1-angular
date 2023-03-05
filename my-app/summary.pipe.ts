import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
    {
        name:'summary'
    })
    export class SummaryPipe implements PipeTransform {
        //limit ועוד פרמטר אופציונלי  (value) הפייפ שלנו יקבל את הערך שעליו נראה לבצע את הפייפ  transform כך אנו יוצרים קלאס פייפ ובפונ ה
        //את הפרמטר הראשון לא צריך לרשום מישום שהוא פשוט הערך שאנו רוצים להציג ולהכיל עליו פייפ summary:10 : במידגה ונרצה להכניס לפייפ שלנו ערך כפרמטר שני אנו נרשום את הפייפ כך
        transform(value: string, limit?: number){
            // פונקציונליות זו לוקחת ערך שהוא סטרינג ומחזירה סאב סטרינג לפי האורך המוכנס
            if(!value){
                return null;
            }
            let acualLimit = (limit) ? limit :50;
            return value.substr(0,acualLimit) + "...";
           
        }
    }