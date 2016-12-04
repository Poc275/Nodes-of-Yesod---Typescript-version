define(["require", "exports"], function (require, exports) {
    "use strict";
    var Tile = (function () {
        function Tile(x, y, asc, type) {
            this.mX = x;
            this.mY = y;
            this.mAsciiCode = asc;
            this.mType = type;
        }
        Object.defineProperty(Tile.prototype, "XStart", {
            get: function () { return this.mX; },
            set: function (value) { this.mX = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Tile.prototype, "YStart", {
            get: function () { return this.mY; },
            set: function (value) { this.mY = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Tile.prototype, "AsciiCode", {
            get: function () { return this.mAsciiCode; },
            set: function (value) { this.mAsciiCode = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Tile.prototype, "Type", {
            get: function () { return this.mType; },
            set: function (value) { this.mType = value; },
            enumerable: true,
            configurable: true
        });
        return Tile;
    }());
    return Tile;
});
//# sourceMappingURL=Tile.js.map