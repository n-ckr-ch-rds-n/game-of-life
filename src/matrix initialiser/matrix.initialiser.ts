import {Matrix} from "../matrix updater/matrix";

export class MatrixInitialiser {
    cellWidth = 10;

    initialise(windowWidth: number): Matrix {
        const cellsPerRow = Math.floor(windowWidth / this.cellWidth);
        return this.generateEmptyArray(cellsPerRow).map(() => this.generateRow(cellsPerRow));
    }

    private generateInitialValue(): boolean {
        const randomNumber = Math.random();
        return randomNumber > 0.5;
    }

    private generateRow(cellsPerRow: number): boolean[] {
        return this.generateEmptyArray(cellsPerRow).map(() => this.generateInitialValue())
    }

    private generateEmptyArray(length: number): number[] {
        return new Array(length).fill(0);
    }
}
