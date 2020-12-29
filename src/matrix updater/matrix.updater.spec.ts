import {MatrixUpdater} from "./matrix.updater";
import {CellStateCalculator} from "../cell-state calculator/cell.state.calculator";
import expect from "expect";
import {FindNeighboursRequest} from "./find.neighbours.request";

describe("Matrix updater", () => {
    let updater: MatrixUpdater;
    let mockCalculator: CellStateCalculator;
    let neighbours: boolean[];

    beforeEach(() => {
        mockCalculator = {
            calculateCellState: (alive, n) => {
                neighbours = n;
                return true;
            }

        } as CellStateCalculator;
        updater = new MatrixUpdater(mockCalculator);
    });

    it("Updates matrices", () => {
        const matrix = [
            [true, false, false],
            [false, true, false],
            [false, false, false]
        ];
        const updatedMatrix = updater.updateMatrix(matrix);
        expect(updatedMatrix.length).toBe(matrix.length);
        matrix.forEach((row, index) => {
            expect(row.length).toBe(matrix[index].length);
        })
    })

    it("Finds neighbours", () => {
        let cellIndex = 0;
        let neighbours: boolean[];
        const request: FindNeighboursRequest = {
            previousRow: [true, false, false],
            currentRow: [false, true, false],
            nextRow: [false, false, false],
            cellIndex
        }
        neighbours = updater.toNeighbours(request);
        expect(neighbours.length).toBe(5);
        expect(neighbours.filter(n => n === true).length).toBe(2);
        expect(neighbours.filter(n => n === false).length).toBe(3);

        cellIndex = 1;
        neighbours = updater.toNeighbours({...request, cellIndex});
        expect(neighbours.length).toBe(8);
        expect(neighbours.filter(n => n === true).length).toBe(1);
        expect(neighbours.filter(n => n === false).length).toBe(7)
    })
})
