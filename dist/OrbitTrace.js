var OrbitTrace;
/******/ var __webpack_modules__ = ({

/***/ 156:
/***/ ((module) => {

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7UUFFaEYsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGFBQWEsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLG9CQUFvQixDQUFDLENBQUMsS0FBSyxDQUFDO1FBRXBHLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFaEQsQ0FBQztDQUdKO0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVOzs7Ozs7O1NDdkozQjtTQUNBOztTQUVBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBOztTQUVBO1NBQ0E7O1NBRUE7U0FDQTtTQUNBOzs7O1NFdEJBO1NBQ0E7U0FDQTtTQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vT3JiaXRUcmFjZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9PcmJpdFRyYWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL09yYml0VHJhY2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9PcmJpdFRyYWNlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9PcmJpdFRyYWNlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQUk9KRUNUID0gJ29yYml0LXRyYWNlJztcclxuY29uc3QgQ1VSU09SX0NMQVNTX05BTUUgPSBgJHtQUk9KRUNUfS1jdXJzb3JgO1xyXG5jb25zdCBDVVJTT1JfQk9SREVSX0NMQVNTX05BTUUgPSBgJHtDVVJTT1JfQ0xBU1NfTkFNRX0tYm9yZGVyYDtcclxuY29uc3QgT05fSE9WRVJfQ0xBU1NfTkFNRSA9IGBkYXRhLSR7UFJPSkVDVH1gO1xyXG5jb25zdCBDU1NfU1RZTEUgPSBgXHJcbiAgICAjJHtDVVJTT1JfQ0xBU1NfTkFNRX0ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB0b3A6IC01cHg7XHJcbiAgICAgIGxlZnQ6IC01cHg7XHJcbiAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICB9XHJcbiAgICAjJHtDVVJTT1JfQk9SREVSX0NMQVNTX05BTUV9IHtcclxuICAgICAgLS1zaXplOiA1MHB4O1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHRvcDogY2FsYyh2YXIoLS1zaXplKSAvIC0yKTtcclxuICAgICAgbGVmdDogY2FsYyh2YXIoLS1zaXplKSAvIC0yKTtcclxuICAgICAgd2lkdGg6IHZhcigtLXNpemUpO1xyXG4gICAgICBoZWlnaHQ6IHZhcigtLXNpemUpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCB3aGl0ZTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIHRyYW5zaXRpb246IHRvcCAwLjEwcyBlYXNlLW91dCwgbGVmdCAwLjEwcyBlYXNlLW91dCwgd2lkdGggMC4xMHMgZWFzZS1vdXQsXHJcbiAgICAgIGhlaWdodCAwLjEwcyBlYXNlLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjEwcyBlYXNlLW91dDtcclxuICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuXHJcblxyXG50eXBlIFBvc2l0aW9uID0ge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG59XHJcblxyXG50eXBlIEN1cnNvckJvcmRlciA9IHtcclxuICAgIHNlbGY6IEhUTUxFbGVtZW50O1xyXG4gICAgcG9zaXRpb246IFBvc2l0aW9uO1xyXG59XHJcblxyXG50eXBlIEN1cnNvciA9IHtcclxuICAgIHNlbGY6IEhUTUxFbGVtZW50O1xyXG4gICAgcG9zaXRpb246IFBvc2l0aW9uO1xyXG4gICAgYm9yZGVyOiBDdXJzb3JCb3JkZXI7XHJcbn1cclxuXHJcbmNsYXNzIE9yYml0VHJhY2Uge1xyXG5cclxuICAgIHByaXZhdGUgY3Vyc29yOiBDdXJzb3I7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogYW55KSB7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBjdXJzb3IgPSBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRGl2KENVUlNPUl9DTEFTU19OQU1FKSk7XHJcbiAgICAgICAgY29uc3QgY3Vyc29yQm9yZGVyID0gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZURpdihDVVJTT1JfQk9SREVSX0NMQVNTX05BTUUpKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJzb3IgPSB7XHJcbiAgICAgICAgICAgIHNlbGY6IGN1cnNvcixcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgICAgICBib3JkZXI6IHtcclxuICAgICAgICAgICAgICAgIHNlbGY6IGN1cnNvckJvcmRlcixcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlU3R5bGUoKTtcclxuICAgICAgICB0aGlzLm9uSG92ZXIoKTtcclxuICAgICAgICB0aGlzLmxvb3AoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgb25Nb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmN1cnNvci5wb3NpdGlvbi54ID0gZXZlbnQuY2xpZW50WDtcclxuICAgICAgICB0aGlzLmN1cnNvci5wb3NpdGlvbi55ID0gZXZlbnQuY2xpZW50WTtcclxuICAgICAgICB0aGlzLmN1cnNvci5zZWxmLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtldmVudC5jbGllbnRYfXB4LCAke2V2ZW50LmNsaWVudFl9cHgpYDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBvbkhvdmVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCBjdXJzb3JCb3JkZXIgPSB0aGlzLmN1cnNvci5ib3JkZXIuc2VsZjtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7T05fSE9WRVJfQ0xBU1NfTkFNRX1dYCkuZm9yRWFjaCgoaXRlbTogRWxlbWVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChfKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpdGVtLmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKE9OX0hPVkVSX0NMQVNTX05BTUUpPy52YWx1ZVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJwb2ludGVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3JCb3JkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIC42KVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvckJvcmRlci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2l6ZVwiLCBcIjMwcHhcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IFwicG9pbnRlcjJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvckJvcmRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yQm9yZGVyLnN0eWxlLm1peEJsZW5kTW9kZSA9IFwiZGlmZmVyZW5jZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvckJvcmRlci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2l6ZVwiLCBcIjgwcHhcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKF8pID0+IHtcclxuICAgICAgICAgICAgICAgIGN1cnNvckJvcmRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInVuc2V0XCI7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3JCb3JkZXIuc3R5bGUubWl4QmxlbmRNb2RlID0gXCJ1bnNldFwiO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yQm9yZGVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1zaXplXCIsIFwiNTBweFwiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZURpdihpZDogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5pZCA9IGlkO1xyXG4gICAgICAgIHJldHVybiBkaXY7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlU3R5bGUoKSB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgIHN0eWxlLmlubmVySFRNTCA9IENTU19TVFlMRTtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBsb29wKCkge1xyXG5cclxuICAgICAgICBjb25zdCBlYXN0aW5nID0gOTtcclxuXHJcbiAgICAgICAgY29uc3QgY3Vyc29yUG9zaXRpb24gPSB0aGlzLmN1cnNvci5wb3NpdGlvbjtcclxuICAgICAgICBjb25zdCBib3JkZXIgPSB0aGlzLmN1cnNvci5ib3JkZXI7XHJcbiAgICAgICAgY29uc3QgY3Vyc29yQm9yZGVyUG9zaXRpb24gPSBib3JkZXIucG9zaXRpb247XHJcblxyXG4gICAgICAgIGN1cnNvckJvcmRlclBvc2l0aW9uLnggKz0gKGN1cnNvclBvc2l0aW9uLnggLSBjdXJzb3JCb3JkZXJQb3NpdGlvbi54KSAvIGVhc3Rpbmc7XHJcbiAgICAgICAgY3Vyc29yQm9yZGVyUG9zaXRpb24ueSArPSAoY3Vyc29yUG9zaXRpb24ueSAtIGN1cnNvckJvcmRlclBvc2l0aW9uLnkpIC8gZWFzdGluZztcclxuXHJcbiAgICAgICAgYm9yZGVyLnNlbGYuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke2N1cnNvckJvcmRlclBvc2l0aW9uLnh9cHgsICR7Y3Vyc29yQm9yZGVyUG9zaXRpb24ueX1weClgO1xyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wLmJpbmQodGhpcykpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE9yYml0VHJhY2VcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNTYpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9