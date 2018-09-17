'use strict';
exports.__esModule = true;
var Points = /** @class */ (function () {
    function Points(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Points.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("la valeur ne peut pas être négative ");
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Points.prototype.draw = function () {
        console.log('x : ' + this._x + ', y : ' + this._y);
    };
    return Points;
}());
exports.Points = Points;
