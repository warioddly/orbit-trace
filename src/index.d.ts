
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


declare class OrbitTrace {

        private cursor: Cursor;

        constructor(options: any);

        private onMouseMove(event: MouseEvent): void;

        private onHover(): void;

        private loop(): void;

        private createStyle(): void
}

export default OrbitTrace;

declare global {
    interface Window {
        OrbitTrace: typeof OrbitTrace;
    }
}

