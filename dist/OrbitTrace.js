var OrbitTrace;
/******/ var __webpack_modules__ = ({

/***/ 156:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrbitTrace = void 0;
const PROJECT = 'orbit-trace';
const CURSOR_CLASS_NAME = `${PROJECT}-cursor`;
const CURSOR_BORDER_CLASS_NAME = `${CURSOR_CLASS_NAME}-border`;
const ON_HOVER_CLASS_NAME = `data-${PROJECT}`;
const CSS_STYLE = `
    #${CURSOR_CLASS_NAME} {
      display: block;
      position: fixed;
      top: -5px;
      left: -5px;
      width: 10px;
      height: 10px;
      background-color: white;
      border-radius: 50%;
      pointer-events: none;
      z-index: 999;
    }
    #${CURSOR_BORDER_CLASS_NAME} {
      --size: 50px;
      position: fixed;
      top: calc(var(--size) / -2);
      left: calc(var(--size) / -2);
      width: var(--size);
      height: var(--size);
      border-radius: 50%;
      box-shadow: 0 0 0 1px white;
      pointer-events: none;
      transition: top 0.10s ease-out, left 0.10s ease-out, width 0.10s ease-out,
      height 0.10s ease-out, background-color 0.10s ease-out;
      z-index: 999;
    }
`;
class OrbitTrace {
    constructor(options) {
        const cursor = document.body.appendChild(this.createDiv(CURSOR_CLASS_NAME));
        const cursorBorder = document.body.appendChild(this.createDiv(CURSOR_BORDER_CLASS_NAME));
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
    onMouseMove(event) {
        this.cursor.position.x = event.clientX;
        this.cursor.position.y = event.clientY;
        this.cursor.self.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    }
    onHover() {
        const cursorBorder = this.cursor.border.self;
        document.querySelectorAll(`[${ON_HOVER_CLASS_NAME}]`).forEach((item) => {
            item.addEventListener("mouseover", (_) => {
                var _a;
                const value = (_a = item.attributes.getNamedItem(ON_HOVER_CLASS_NAME)) === null || _a === void 0 ? void 0 : _a.value;
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
            item.addEventListener("mouseout", (_) => {
                cursorBorder.style.backgroundColor = "unset";
                cursorBorder.style.mixBlendMode = "unset";
                cursorBorder.style.setProperty("--size", "50px");
            });
        });
    }
    createDiv(id) {
        const div = document.createElement('div');
        div.id = id;
        return div;
    }
    createStyle() {
        const style = document.createElement('style');
        style.innerHTML = CSS_STYLE;
        document.head.appendChild(style);
    }
    loop() {
        const easting = 9;
        const cursorPosition = this.cursor.position;
        const border = this.cursor.border;
        const cursorBorderPosition = border.position;
        cursorBorderPosition.x += (cursorPosition.x - cursorBorderPosition.x) / easting;
        cursorBorderPosition.y += (cursorPosition.y - cursorBorderPosition.y) / easting;
        border.self.style.transform = `translate(${cursorBorderPosition.x}px, ${cursorBorderPosition.y}px)`;
        requestAnimationFrame(this.loop.bind(this));
    }
}
exports.OrbitTrace = OrbitTrace;
module.exports = OrbitTrace;


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module is referenced by other modules so it can't be inlined
/******/ var __webpack_exports__ = __webpack_require__(156);
/******/ OrbitTrace = __webpack_exports__;
/******/ 
