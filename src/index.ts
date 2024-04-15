
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


type Position = {
    x: number;
    y: number;
}

type CursorBorder = {
    self: HTMLElement;
    position: Position;
}

type Cursor = {
    self: HTMLElement;
    position: Position;
    border: CursorBorder;
}

class OrbitTrace {

    private cursor: Cursor;

    constructor(options: any) {


        const cursor = document.body.appendChild(this.createDiv(CURSOR_CLASS_NAME));
        const cursorBorder = document.body.appendChild(this.createDiv(CURSOR_BORDER_CLASS_NAME));

        this.cursor = {
            self: cursor,
            position: { x: 0, y: 0 },
            border: {
                self: cursorBorder,
                position: { x: 0, y: 0 }
            }
        }

        document.addEventListener("mousemove", this.onMouseMove.bind(this));

        this.createStyle();
        this.onHover();
        this.loop();

    }


    private onMouseMove(event: MouseEvent) {
        this.cursor.position.x = event.clientX;
        this.cursor.position.y = event.clientY;
        this.cursor.self.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    }


    private onHover() {

        const cursorBorder = this.cursor.border.self;

        console.log(document.querySelectorAll(`[${ON_HOVER_CLASS_NAME}]`));
        document.querySelectorAll(`[${ON_HOVER_CLASS_NAME}]`).forEach((item: Element) => {

            item.addEventListener("mouseover", (_) => {

                const value = item.attributes.getNamedItem(ON_HOVER_CLASS_NAME)?.value

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


    private createDiv(id: string): HTMLElement {
        const div = document.createElement('div');
        div.id = id;
        return div;
    }


    private createStyle() {
        const style = document.createElement('style');
        style.innerHTML = CSS_STYLE;
        document.head.appendChild(style);
    }


    private loop() {

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


module.exports = {OrbitTrace};