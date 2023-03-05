"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeComponent = void 0;
// יוצרים קלאס
var LikeComponent = /** @class */ (function () {
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
    function LikeComponent(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    //פלוס 1 בגלל ה"+="י" _likesCount ואנו שואלים האם היא שווה לאמת או שקר  ובמידה והיא שווה לאמת אנו נוסיף למשתנה  _likesCount יוצרים פונקציה שלוקחת את המשתנה
    LikeComponent.prototype.onClick = function () {
        this._likesCount += (this._isSelected) ? -1 : 1;
        // לאחר מכן אנו מחזירים את הערך שוב לשקר
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(LikeComponent.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: false,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
