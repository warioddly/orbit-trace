type Options = {
    easing: number;
    border?: {
        color: string;
        size: number;
        width: number;
        transition: number;
    };
    cursor?: {
        visible: boolean;
    };
};
declare class OrbitTrace {
    private cursor;
    private initialized;
    private readonly options;
    constructor(options: Options);
    private onMouseMove;
    private onHover;
    private handleGesture;
    private createDiv;
    private createStyle;
    private loop;
}
export default OrbitTrace;
