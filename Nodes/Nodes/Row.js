define(["require", "exports", "Tile"], function (require, exports, Tile) {
    "use strict";
    var Row = (function () {
        function Row() {
            for (var i = 0; i < 14; i++) {
                this.mTiles[i] = new Tile(0, 0, "4", null);
            }
        }
        Object.defineProperty(Row.prototype, "Tiles", {
            get: function () { return this.mTiles; },
            set: function (value) { this.mTiles = value; },
            enumerable: true,
            configurable: true
        });
        Row.prototype.GetTilesAsciiArray = function () {
            var asciiArray;
            this.Tiles.forEach(function (tile) {
                asciiArray.push(tile.AsciiCode);
            });
            return asciiArray;
        };
        return Row;
    }());
    return Row;
});
//# sourceMappingURL=Row.js.map