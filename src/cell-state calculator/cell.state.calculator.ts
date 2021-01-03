export class CellStateCalculator {

    calculateCellState(alive: boolean, neighbours: boolean[]): boolean {
        const numberOfLivingNeighbours = this.toNumberOfLivingNeighbours(neighbours);
        return alive
            ? this.staysAlive(numberOfLivingNeighbours)
            : this.resurrects(numberOfLivingNeighbours);
    }

    staysAlive(numberOfLivingNeighbours: number): boolean {
        return numberOfLivingNeighbours === 3 || numberOfLivingNeighbours === 2;
    }

    resurrects(numberOfLivingNeighbours: number): boolean {
        return numberOfLivingNeighbours === 3;
    }

    private toNumberOfLivingNeighbours(neighbours: boolean[]): number {
        return neighbours.filter(n => !!n).length;
    }
}
