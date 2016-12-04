class Tile {

    private mX: number;
    private mY: number;
    private mAsciiCode: string;
    private mType: string;

    constructor(x: number, y: number, asc: string, type: string) {
        this.mX = x;
        this.mY = y;
        this.mAsciiCode = asc;
        this.mType = type;
    }

    public get XStart() { return this.mX; }
    public set XStart(value: number) { this.mX = value; }

    public get YStart() { return this.mY; }
    public set YStart(value: number) { this.mY = value; }

    public get AsciiCode() { return this.mAsciiCode; }
    public set AsciiCode(value: string) { this.mAsciiCode = value; }

    public get Type() { return this.mType; }
    public set Type(value: string) { this.mType = value; }
}

export = Tile;