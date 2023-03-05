"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    // new Point(1,2) כאשר אנו מכניסים פרמטרים לתוך הקונסטרקטור שלנו אנו בעצם קובעים שכל משתנה שיהיה מופע של הקלאס שלנו הצטרך להכניס פרמטרים לקלאס לדוג'
    //(הכוונה למשתנה של הקלאס שאנו בתוכו this) ובתוך הסקופ של הקונסטרקטור אנו אומרים שהערכים שיוכנסו יהיו שווים למשתנים של הקלאס שלנו
    // אך במידה ואנו מוסיפים כמו פה את הסימן שאלה אנו לא מחייבים את היוזר להכניס פרמטרים
    function Point(_x, _y) {
        this._x = _y;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log("x: " + this._x + " y:" + this._y);
    };
    Object.defineProperty(Point.prototype, "X", {
        //כאן אנו יוצרים גטאר וסאטר ע''י יצור של פונקציות ויש לשים לך ששמנו פה איקס גדול כי אחרת המנוע יחשוב שזה האיקס של המשתנה  
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
var point = new Point(3, 3);
point._x = 1;
point._y = 2;
point.draw();
