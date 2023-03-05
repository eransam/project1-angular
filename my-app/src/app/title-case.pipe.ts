import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
// כאן אנו יוצרים פייפ אשר מקבל סטרינג ומחזיר אותו עם אותיות גדולות בתחילת מילה ומסדר את הטקסט כמו שצריך מבחינת אותיות גדולות וקטנות
export class TitleCasePipe implements PipeTransform {
//אך הוא עדיין עושה בדיקה של סוג המשתנה  any  פועל כמו  unknown
  transform(value: any): any {
    // בתחילפת פייפ אנו תמיד עושים תנאי שבמידה ולא הוכנס ערך אנו נחזיר נל לפני תחילת כל הפונקציונליות שלנו
    if (!value) return null;
    // כאן אנו יוצרים מערך עם מילים מיוחדות שצריות להשאר באותיות קטנות
    let prepositions = [
        'of','the'
    ];

    //words כאן אנו לוקחים את הסטרינד שהתקבל בפרמטר של הפייפ ומפרידים כל אות ומכניסים אותה למערך
    let words = value.split(" ");
    // כך אנו רצים על המערך לפי אורך המערך
    for (let index = 0; index < words.length; index++) {
        // במידה ומהמילה השנייה יש לנו את המילים המיוחדות אנו נהפוך אותם לאותיות קטנות
        if (index>0 && prepositions.includes(words[index].toLowerCase())) {
            words[index] = words[index].toLowerCase();
        //במידה והמילה היא לא אחת מהאותיות המיוחדות אנו נהפוך את האות הראשונה שלה לאות גדולה ואת כל השאר לאותיות קטנות 
        }else{
            //לוקח מילים מסטרינג לפי מיקומים הכוונה ממיקום עד מיקןם = .substr
            words[index] =  words[index].substr(0,1).toUpperCase() +  words[index].substr(1).toLowerCase()
        }
        
    }

    //It is used to join all the elements of an array into a single string, with a separator between each element. 
    return words.join(" ");
  }

}
