import {CellStateCalculator} from "../cell-state calculator/cell.state.calculator";
import {FindNeighboursRequest} from "./find.neighbours.request";
import {Matrix} from "./matrix";
import {RowSet} from "./row.set";

export class MatrixUpdater {

    constructor(private cellStateCalculator: CellStateCalculator) {
    }

    updateMatrix(matrix: Matrix): Matrix {
        return matrix.map((row, rowIndex, matrixArray) => {
            const rows = this.toRows(matrixArray, rowIndex);
            return row.map((cellState, cellIndex) => {
                const request = {
                    ...rows,
                    cellIndex
                };
                const neighbours = this.toNeighbours(request);
                return this.cellStateCalculator.calculateCellState(cellState, neighbours);
            })
        })
    }

    toNeighbours(request: FindNeighboursRequest): boolean[] {
        const previousAndNextAdjacents = [request.previousRow, request.nextRow]
            .map(r => this.toPreviousOrNextRowAdjacents(r, request.cellIndex))
            .flat();
        return [
            ...previousAndNextAdjacents,
            ...this.toAdjacents(request.currentRow, request.cellIndex)
        ];
    }

    toRows(matrix: Matrix, rowIndex: number): RowSet {
        return {
            previousRow: matrix[rowIndex - 1] || matrix[matrix.length - 1],
            currentRow: matrix[rowIndex],
            nextRow: matrix[rowIndex + 1] || matrix[0],
        }
    }

    toAdjacents(row: boolean[], cellIndex: number): boolean[] {
        const leftAdjacent = row[cellIndex - 1] === undefined ? row[row.length - 1] : row[cellIndex - 1];
        const rightAdjacent = row[cellIndex + 1] === undefined ? row[0] : row[cellIndex + 1];
        return [leftAdjacent, rightAdjacent];
    }

    private toPreviousOrNextRowAdjacents(row: boolean[], cellIndex: number): boolean[] {
        return [
            ...this.toAdjacents(row, cellIndex),
            row[cellIndex]
        ];
    }

}
