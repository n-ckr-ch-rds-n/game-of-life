import {CellStateCalculator} from "./cell.state.calculator";
import expect from "expect";

describe("Cell state calculator", () => {
    let calculator: CellStateCalculator;
    let neighbours: boolean[];
    let cellState: boolean;

    beforeEach(() => {
        calculator = new CellStateCalculator();
    })

    it("Throws if passed the wrong number of neighbours", () => {
        cellState = true;
        neighbours = [true, false, false];
        expect(() => calculator.calculateCellState(cellState, neighbours)).toThrow();
    })

    it("Determines whether cells are lonely", () => {
        neighbours = [false, true, false, false];
        expect(calculator.isLonely(neighbours)).toBe(true);

        neighbours = [true, true, false, false];
        expect(calculator.isLonely(neighbours)).toBe(false);
    })

    it("Determines whether cells are overcrowded", () => {
        neighbours = [true, true, true, true];
        expect(calculator.isOverCrowded(neighbours)).toBe(true);

        neighbours = [true, true, true, false];
        expect(calculator.isOverCrowded(neighbours)).toBe(false);
    })

    it("Determines whether cells are resurrectible", () => {
        neighbours = [true, true, true, false];
        expect(calculator.isResurrectible(neighbours)).toBe(true);

        neighbours = [true, true, false, false];
        expect(calculator.isResurrectible(neighbours)).toBe(false);
    })
})
