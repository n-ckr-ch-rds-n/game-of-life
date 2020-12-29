import {MatrixUpdater} from "./matrix.updater";
import {CellStateCalculator} from "../cell-state calculator/cell.state.calculator";

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
    })
})
