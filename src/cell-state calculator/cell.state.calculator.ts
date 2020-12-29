export class CellStateCalculator {

    calculateCellState(alive: boolean, neighbours: boolean[]): boolean {
        if (alive) {
            if (this.isLonely(neighbours)) {
                return false;
            }
            if (this.isOverCrowded(neighbours)) {
                return false;
            }
        }
        return true;
    }

    isOverCrowded(neighbours: boolean[]): boolean {
        return neighbours.filter(n => !!n).length > 3;
    }

    isLonely(neighbours: boolean[]): boolean {
        return neighbours.filter(n => !!n).length < 2;
    }

}
