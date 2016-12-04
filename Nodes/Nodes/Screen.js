define(["require", "exports", "Row"], function (require, exports, Row) {
    "use strict";
    var Screen = (function () {
        function Screen() {
            for (var i = 0; i < 10; i++) {
                this.mRows[i] = new Row();
            }
        }
        Object.defineProperty(Screen.prototype, "Rows", {
            get: function () { return this.mRows; },
            set: function (value) { this.mRows = value; },
            enumerable: true,
            configurable: true
        });
        return Screen;
    }());
    return Screen;
});
//# sourceMappingURL=Screen.js.map