
// יוצרים קלאס
export class LikeComponent { 
    // יוצאים משתנים כבר בקונסטרקטור, זאת צורת כתיבה קצרה אשר גם קובעת שאנו מכניסים פרמטרים לקומפוננטה וגם יוצרים משתנים קומפוננטה הזו
    // קיצור של:
    // export class Point {
    //     _x: number;
    //     _y:number;
    //     constructor(_x?:number, _y?:number)
    //     {
    //         this._x=_y;
    //         this._y=_y;
    //     }
    constructor(private _likesCount: number, private _isSelected: boolean) {
    }

    //פלוס 1 בגלל ה"+="י" _likesCount ואנו שואלים האם היא שווה לאמת או שקר  ובמידה והיא שווה לאמת אנו נוסיף למשתנה  _likesCount יוצרים פונקציה שלוקחת את המשתנה
    onClick() {
        this._likesCount += (this._isSelected) ? -1 : 1;
        // לאחר מכן אנו מחזירים את הערך שוב לשקר
        this._isSelected = !this._isSelected;
    }


    get likesCount() { 
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected;
    }
}