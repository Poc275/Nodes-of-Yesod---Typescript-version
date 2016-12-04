import Tile = require("Tile");

class Row {

    private mTiles: Array<Tile>;

    constructor() {
        for (var i = 0; i < 14; i++) {
            this.mTiles[i] = new Tile(0, 0, "4", null);
        }
    }

    public get Tiles() { return this.mTiles; }
    public set Tiles(value: Array<Tile>) { this.mTiles = value; }

    public GetTilesAsciiArray(): Array<string> {
        var asciiArray: Array<string>;

        this.Tiles.forEach(function (tile) {
            asciiArray.push(tile.AsciiCode);
        });

        return asciiArray;
    }
}

export = Row;