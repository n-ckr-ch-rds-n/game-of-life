import {CellStateCalculator} from "./cell.state.calculator";
import expect from "expect";

describe("Cell state calculator", () => {
    let calculator: CellStateCalculator;
    let neighbours: boolean[];

    beforeEach(() => {
        calculator = new CellStateCalculator();
    })

    it("Calculates whether live cells stay alive", () => {
        neighbours = [true, true, true, false];
        expect(calculator.calculateCellState(true, neighbours)).toBe(true);

        neighbours = [true, false, false, false];
        expect(calculator.calculateCellState(true, neighbours)).toBe(false);
    })

    it("Calculates whether dead cells resurrect", () => {
        neighbours = [true, true, true, false];
        expect(calculator.calculateCellState(false, neighbours)).toBe(true);

        neighbours = [true, true, false, false];
        expect(calculator.calculateCellState(false, neighbours)).toBe(false);
    })
})
