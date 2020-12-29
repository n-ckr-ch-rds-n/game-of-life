export interface FindNeighboursRequest {
    previousRow: boolean[];
    currentRow: boolean[];
    nextRow: boolean[];
    cellIndex: number;
}
