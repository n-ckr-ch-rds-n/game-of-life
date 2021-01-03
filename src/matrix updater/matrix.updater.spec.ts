import {MatrixUpdater} from "./matrix.updater";
import {CellStateCalculator} from "../cell-state calculator/cell.state.calculator";
import expect from "expect";
import {FindNeighboursRequest} from "./find.neighbours.request";
import {Matrix} from "./matrix";

describe("Matrix updater", () => {
    let updater: MatrixUpdater;
    let mockCalculator: CellStateCalculator;
    let neighbours: boolean[];
    let matrix: Matrix;
    let firstRow: boolean[];
    let secondRow: boolean[];
    let thirdRow: boolean[];

    const arraysEqual = (original: boolean[], result: boolean[]): boolean => {
        return original.every((value, index) => result[index] === value);
    }

    beforeEach(() => {
        mockCalculator = {
            calculateCellState: (alive, n) => {
                neighbours = n;
                return true;
            }

        } as CellStateCalculator;
        updater = new MatrixUpdater(mockCalculator);
        firstRow = [true, false, false];
        secondRow = [false, true, false];
        thirdRow = [false, false, false];
        matrix = [firstRow, secondRow, thirdRow];
    });

    it("Updates matrices", () => {
        const updatedMatrix = updater.updateMatrix(matrix);
        expect(updatedMatrix.length).toBe(matrix.length);
        matrix.forEach((row, index) => {
            expect(row.length).toBe(matrix[index].length);
        })
    })

    it("Populates previousRow with the last row in the matrix if there is no previous row", () => {
        const rowSet = updater.toRows(matrix, 0);
        expect(arraysEqual(firstRow, rowSet.currentRow)).toBe(true);
        expect(arraysEqual(thirdRow, rowSet.previousRow)).toBe(true);
        expect(arraysEqual(secondRow, rowSet.nextRow)).toBe(true);
    })

    it("Populates nextRow with the first row in the matrix if there is no next row", () => {
        const rowSet = updater.toRows(matrix, 2);
        expect(arraysEqual(thirdRow, rowSet.currentRow)).toBe(true);
        expect(arraysEqual(secondRow, rowSet.previousRow)).toBe(true);
        expect(arraysEqual(firstRow, rowSet.nextRow)).toBe(true);
    })

    it("Returns the last value in the row if no lefthand adjacent", () => {
        const adjacents = updater.toAdjacents(firstRow, 0);
        const expectedAdjacents = [false, false];
        expect(adjacents.length === expectedAdjacents.length).toBe(true);
        adjacents.forEach(adjacent => {
            expect(expectedAdjacents.includes(adjacent)).toBe(true);
        })
    })

    it("Returns the first value in the row if no righthand adjacent", () => {
        const adjacents = updater.toAdjacents(secondRow, 2);
        const expectedAdjacents = [false, true];
        adjacents.forEach(adjacent => {
            expect(expectedAdjacents.includes(adjacent)).toBe(true);
        })
    })

    // it("Finds neighbours", () => {
    //     let cellIndex = 0;
    //     let neighbours: boolean[];
    //     const request: FindNeighboursRequest = {
    //         previousRow: [true, false, false],
    //         currentRow: [false, true, false],
    //         nextRow: [false, false, false],
    //         cellIndex
    //     }
    //     neighbours = updater.toNeighbours(request);
    //     expect(neighbours.length).toBe(8);
    //     expect(neighbours.filter(n => n === true).length).toBe(2);
    //     expect(neighbours.filter(n => n === false).length).toBe(3);
    //
    //     cellIndex = 1;
    //     neighbours = updater.toNeighbours({...request, cellIndex});
    //     expect(neighbours.length).toBe(8);
    //     expect(neighbours.filter(n => n === true).length).toBe(1);
    //     expect(neighbours.filter(n => n === false).length).toBe(7)
    // })
})
