import {CellStateCalculator} from "../cell-state calculator/cell.state.calculator";
import {FindNeighboursRequest} from "./find.neighbours.request";

export class MatrixUpdater {

    constructor(private cellStateCalculator: CellStateCalculator) {
    }

    updateMatrix(matrix: (boolean[])[]): (boolean[])[] {
        return matrix.map((row, rowIndex) => {
            return row.map((cellState, cellIndex) => {
                const neighbours = this.toNeighbours({
                    previousRow: matrix[rowIndex - 1],
                    currentRow: row,
                    nextRow: matrix[rowIndex + 1],
                    cellIndex
                })
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

    private toAdjacents(row: boolean[], cellIndex: number): boolean[] {
        return [
            row[cellIndex - 1],
            row[cellIndex + 1],
        ]
    }

    private toPreviousOrNextRowAdjacents(row: boolean[], cellIndex: number): boolean[] {
        return [
            ...this.toAdjacents(row, cellIndex),
            row[cellIndex]
        ]
    }

}
