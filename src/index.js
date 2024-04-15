var PROJECT = 'orbit-trace';
var CURSOR_CLASS_NAME = "".concat(PROJECT, "-cursor");
var CURSOR_BORDER_CLASS_NAME = "".concat(CURSOR_CLASS_NAME, "-border");
var ON_HOVER_CLASS_NAME = "data-".concat(PROJECT);
var CSS_STYLE = "\n    #".concat(CURSOR_CLASS_NAME, " {\n      display: block;\n      position: fixed;\n      top: -5px;\n      left: -5px;\n      width: 10px;\n      height: 10px;\n      background-color: white;\n      border-radius: 50%;\n      pointer-events: none;\n      z-index: 999;\n    }\n    #").concat(CURSOR_BORDER_CLASS_NAME, " {\n      --size: 50px;\n      position: fixed;\n      top: calc(var(--size) / -2);\n      left: calc(var(--size) / -2);\n      width: var(--size);\n      height: var(--size);\n      border-radius: 50%;\n      box-shadow: 0 0 0 1px white;\n      pointer-events: none;\n      transition: top 0.10s ease-out, left 0.10s ease-out, width 0.10s ease-out,\n      height 0.10s ease-out, background-color 0.10s ease-out;\n      z-index: 999;\n    }\n");
var OrbitTrace = /** @class */ (function () {
    function OrbitTrace(options) {
        var cursor = document.body.appendChild(this.createDiv(CURSOR_CLASS_NAME));
        var cursorBorder = document.body.appendChild(this.createDiv(CURSOR_BORDER_CLASS_NAME));
        this.cursor = {
            self: cursor,
            position: { x: 0, y: 0 },
            border: {
                self: cursorBorder,
                position: { x: 0, y: 0 }
            }
        };
        document.addEventListener("mousemove", this.onMouseMove.bind(this));
        this.createStyle();
        this.onHover();
        this.loop();
    }
    OrbitTrace.prototype.onMouseMove = function (event) {
        this.cursor.position.x = event.clientX;
        this.cursor.position.y = event.clientY;
        this.cursor.self.style.transform = "translate(".concat(event.clientX, "px, ").concat(event.clientY, "px)");
    };
    OrbitTrace.prototype.onHover = function () {
        var cursorBorder = this.cursor.border.self;
        console.log(document.querySelectorAll("[".concat(ON_HOVER_CLASS_NAME, "]")));
        document.querySelectorAll("[".concat(ON_HOVER_CLASS_NAME, "]")).forEach(function (item) {
            item.addEventListener("mouseover", function (_) {
                var _a;
                var value = (_a = item.attributes.getNamedItem(ON_HOVER_CLASS_NAME)) === null || _a === void 0 ? void 0 : _a.value;
                if (value === "pointer") {
                    cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
                    cursorBorder.style.setProperty("--size", "30px");
                }
                if (value === "pointer2") {
                    cursorBorder.style.backgroundColor = "white";
                    cursorBorder.style.mixBlendMode = "difference";
                    cursorBorder.style.setProperty("--size", "80px");
                }
            });
            item.addEventListener("mouseout", function (_) {
                cursorBorder.style.backgroundColor = "unset";
                cursorBorder.style.mixBlendMode = "unset";
                cursorBorder.style.setProperty("--size", "50px");
            });
        });
    };
    OrbitTrace.prototype.createDiv = function (id) {
        var div = document.createElement('div');
        div.id = id;
        return div;
    };
    OrbitTrace.prototype.createStyle = function () {
        var style = document.createElement('style');
        style.innerHTML = CSS_STYLE;
        document.head.appendChild(style);
    };
    OrbitTrace.prototype.loop = function () {
        var easting = 9;
        var cursorPosition = this.cursor.position;
        var border = this.cursor.border;
        var cursorBorderPosition = border.position;
        cursorBorderPosition.x += (cursorPosition.x - cursorBorderPosition.x) / easting;
        cursorBorderPosition.y += (cursorPosition.y - cursorBorderPosition.y) / easting;
        border.self.style.transform = "translate(".concat(cursorBorderPosition.x, "px, ").concat(cursorBorderPosition.y, "px)");
        requestAnimationFrame(this.loop.bind(this));
    };
    return OrbitTrace;
}());
