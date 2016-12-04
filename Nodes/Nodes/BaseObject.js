define(["require", "exports"], function (require, exports) {
    "use strict";
    var BaseObject = (function () {
        function BaseObject(texture) {
            this.m_charlieX = 0;
            this.m_charlieY = 0;
            this.m_speedX = 1.0;
            this.m_speedY = 1.0;
            this.m_debug = false;
            this.m_texture = texture;
            this.m_x = 0;
            this.m_y = 0;
            this.m_width = 0;
            this.m_height = 0;
            this.m_frame = 0;
            this.m_offsetX = 0;
            this.m_offsetY = 0;
            this.m_animTimer = 0;
            this.m_facingLeft = false;
        }
        BaseObject.prototype.Update = function (value) {
        };
        BaseObject.prototype.Draw = function (ctx) {
        };
        Object.defineProperty(BaseObject.prototype, "X", {
            get: function () { return this.m_x; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseObject.prototype, "CharlieX", {
            set: function (value) { this.m_charlieX = value; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseObject.prototype, "Y", {
            get: function () { return this.m_y; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseObject.prototype, "CharlieY", {
            set: function (value) { this.m_charlieY = value; },
            enumerable: true,
            configurable: true
        });
        return BaseObject;
    }());
    return BaseObject;
});
//# sourceMappingURL=BaseObject.js.map