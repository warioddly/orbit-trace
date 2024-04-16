const PROJECT = 'orbit-trace';
const CURSOR_CLASS_NAME = `${PROJECT}-cursor`;
const CURSOR_BORDER_CLASS_NAME = `${CURSOR_CLASS_NAME}-border`;
const ON_HOVER_CLASS_NAME = `data-${PROJECT}`;
class OrbitTrace {
    constructor(options) {
        this.initialized = false;
        this.options = {
            easing: 8,
            border: {
                color: "white",
                size: 50,
                transition: 0.10,
                width: 1
            },
            cursor: {
                visible: false
            }
        };
        this.options = Object.assign(Object.assign({}, this.options), options);
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
        this.handleGesture();
        this.createStyle();
        this.onHover();
        this.loop();
    }
    onMouseMove(event) {
        if (!this.initialized) {
            this.cursor.self.style.opacity = "1";
            this.cursor.border.self.style.opacity = "1";
            this.initialized = true;
        }
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
    handleGesture() {
        const cursor = this.cursor.self;
        const cursorBorder = this.cursor.border.self;
        // document.addEventListener("copy", (_) => {
        //     this.cursor.self.classList.add("copy");
        // });
        document.addEventListener("selectionchange", (_) => {
            var _a, _b;
            console.log(((_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.toString().length) > 0 && !cursor.classList.contains("copy"));
            if (((_b = window.getSelection()) === null || _b === void 0 ? void 0 : _b.toString().length) > 0 && !cursor.classList.contains("copy")) {
                this.cursor.self.classList.add("copy");
            }
        });
        document.addEventListener("mouseup", (_) => {
            setTimeout(() => {
                this.cursor.self.classList.remove("copy");
            }, 1000);
        });
    }
    createDiv(id) {
        const div = document.createElement('div');
        div.id = id;
        return div;
    }
    createStyle() {
        const border = this.options.border;
        const style = document.createElement('style');
        style.innerHTML = `
        
            html {
                cursor: ${this.options.cursor.visible ? "default" : "none"};
            }
            
            #${CURSOR_CLASS_NAME} {
              opacity: 0;
              display: block;
              position: fixed;
              top: -5px;
              left: -5px;
              width: 10px;
              height: 10px;
              background-color: white;
              border-radius: 50%;
              pointer-events: none;
              transition:
                top ${border.transition}s ease-out,
                left ${border.transition}s ease-out,
                width ${border.transition}s ease-out,
                height ${border.transition}s ease-out,
                background-color ${border.transition}s ease-out,
                opacity 1s ease-out;
              z-index: 999;
            }
            
            #${CURSOR_CLASS_NAME}.copy {
                background-color: transparent;
                border: 1px solid white;
                width: 1px;
                height: 15px;
                border-radius: 0;
            }
            
            #${CURSOR_BORDER_CLASS_NAME} {
              --size: ${border.size}px;
              opacity: 0;
              position: fixed;
              top: calc(var(--size) / -2);
              left: calc(var(--size) / -2);
              width: var(--size);
              height: var(--size);
              border-radius: 50%;
              box-shadow: 0 0 0 ${border.width}px ${border.color};
              pointer-events: none;
              transition:
                top ${border.transition}s ease-out,
                left ${border.transition}s ease-out,
                width ${border.transition}s ease-out,
                height ${border.transition}s ease-out,
                background-color ${border.transition}s ease-out,
                opacity 1s ease-out;
              z-index: 999;
            }
            
            #${CURSOR_CLASS_NAME}.copy + #${CURSOR_BORDER_CLASS_NAME} {
               --size: ${border.size}px;
               animation: pulse 0.60s infinite;
            }
            
            @keyframes pulse {
              0% {
                box-shadow: 0 0 0 ${border.width + 2}px ${border.color};
                opacity: 1;
              }
              50% {
                box-shadow: 0 0 0 ${border.width}px ${border.color};
                opacity: 0.5;
              }
              100% {
                box-shadow: 0 0 0 ${border.width + 2}px ${border.color};
                opacity: 1;
              }
            }
            
            
        `;
        document.head.appendChild(style);
    }
    loop() {
        const cursorPosition = this.cursor.position;
        const border = this.cursor.border;
        const cursorBorderPosition = border.position;
        cursorBorderPosition.x += (cursorPosition.x - cursorBorderPosition.x) / this.options.easing;
        cursorBorderPosition.y += (cursorPosition.y - cursorBorderPosition.y) / this.options.easing;
        border.self.style.transform = `translate(${cursorBorderPosition.x}px, ${cursorBorderPosition.y}px)`;
        requestAnimationFrame(this.loop.bind(this));
    }
}
module.exports = OrbitTrace;
//# sourceMappingURL=index.js.map