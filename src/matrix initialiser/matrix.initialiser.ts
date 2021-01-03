import {Matrix} from "../matrix updater/matrix";
import {cellSideLength} from "../cell.side.length";

export class MatrixInitialiser {
    cellSideLength = cellSideLength;

    initialise(dimensions: {width: number, height: number}): Matrix {
        const cellsPerRow = Math.floor(dimensions.width / this.cellSideLength);
        const numberOfRows = Math.floor(dimensions.height / this.cellSideLength);
        return this.generateEmptyArray(numberOfRows).map(() => this.generateRow(cellsPerRow));
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
