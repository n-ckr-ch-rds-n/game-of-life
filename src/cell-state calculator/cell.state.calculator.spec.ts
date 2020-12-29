import {CellStateCalculator} from "./cell.state.calculator";
import expect from "expect";

describe("Cell state calculator", () => {
    let calculator: CellStateCalculator;

    beforeEach(() => {
        calculator = new CellStateCalculator();
    })

    it("Determines whether cells are lonely", () => {
        let neighbours = [false, true, false, false];
        expect(calculator.isLonely(neighbours)).toBe(true);

        neighbours = [true, true, false, false];
        expect(calculator.isLonely(neighbours)).toBe(false);
    })

    it("Determines whether cells are overcrowded", () => {

    })
})
