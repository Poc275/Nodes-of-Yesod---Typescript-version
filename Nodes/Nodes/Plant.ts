﻿import Enemy = require("Enemy");

class Plant extends Enemy {
    constructor(xpos: number, ypos: number, speedx: number, gamesprites: HTMLCanvasElement, wall: number[]) {
        super(xpos, ypos, speedx, gamesprites, wall);
    }
}
export = Plant;