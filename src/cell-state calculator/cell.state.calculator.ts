export class CellStateCalculator {

    calculateCellState(alive: boolean, neighbours: boolean[]): boolean {
        if (alive) {
            return !(this.isLonely(neighbours) || this.isOverCrowded(neighbours));
        } else {
            return !!this.isResurrectible(neighbours);
        }
    }

    isResurrectible(neighbours: boolean[]): boolean {
        return this.toNumberOfLivingNeighbours(neighbours) === 3;
    }

    isOverCrowded(neighbours: boolean[]): boolean {
        return this.toNumberOfLivingNeighbours(neighbours) > 3;
    }

    isLonely(neighbours: boolean[]): boolean {
        return this.toNumberOfLivingNeighbours(neighbours) < 2;
    }

    private toNumberOfLivingNeighbours(neighbours: boolean[]): number {
        return neighbours.filter(n => !!n).length;
    }
}
