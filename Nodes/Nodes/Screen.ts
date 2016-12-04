import Row = require("Row");

class Screen {

    private mRows: Array<Row>;

    constructor() {
        for (var i = 0; i < 10; i++) {
            this.mRows[i] = new Row();
        }
    }

    public get Rows() { return this.mRows; }
    public set Rows(value: Array<Row>) { this.mRows = value; }
}

export = Screen;