import {CellStateCalculator} from "../cell-state calculator/cell.state.calculator";
import {FindNeighboursRequest} from "./find.neighbours.request";

export class MatrixUpdater {

    constructor(private cellStateCalculator: CellStateCalculator) {
    }

    updateMatrix(matrix: (boolean[])[]): (boolean[])[] {
        return matrix.map((row, rowIndex) => {
            return row.map((cellState, cellIndex) => {
                console.log("ROW", row);
                const request = {
                    previousRow: matrix[rowIndex - 1],
                    currentRow: row,
                    nextRow: matrix[rowIndex + 1],
                    cellIndex
                };
                console.log("CELL INDEX", cellIndex);
                const neighbours = this.toNeighbours(request);
                console.log("NEIGHBS", neighbours);
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
        ].filter(c => c !== undefined);
    }

    private toAdjacents(row: boolean[], cellIndex: number): boolean[] {
        return [
            row[cellIndex - 1],
            row[cellIndex + 1],
        ];
    }

    private toPreviousOrNextRowAdjacents(row: boolean[], cellIndex: number): boolean[] {
        return row ? [
            ...this.toAdjacents(row, cellIndex),
            row[cellIndex]
        ] : [];
    }

}
