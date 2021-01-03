import {RowSet} from "./row.set";

export interface FindNeighboursRequest extends RowSet {
    cellIndex: number;
}
