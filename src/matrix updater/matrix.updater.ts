import {CellStateCalculator} from "../cell-state calculator/cell.state.calculator";

export class MatrixUpdater {
    constructor(private cellStateCalculator: CellStateCalculator) {
    }

    updateMatrix(matrix: (boolean[])[]): (boolean[])[] {
        return matrix.map((row, rowIndex) => {
            return row.map((cellState, cellIndex) => {
                const neighbours = [
                    matrix[rowIndex - 1][cellIndex],
                    matrix[rowIndex - 1][cellIndex - 1],
                    matrix[rowIndex - 1][cellIndex + 1],
                    row[cellIndex - 1],
                    row[cellIndex + 1],
                    matrix[rowIndex + 1][cellIndex],
                    matrix[rowIndex + 1][cellIndex - 1],
                    matrix[rowIndex + 1][cellIndex + 1],
                ];
                return this.cellStateCalculator.calculateCellState(cellState, neighbours);
            })
        })
    }

}
