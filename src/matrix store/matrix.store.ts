import {writable} from "svelte/store";
import {Matrix} from "../matrix updater/matrix";

const matrixInit = [
    [true, false, false],
    [false, true, false],
    [false, false, false]
];

export const matrixStore = writable<Matrix>(matrixInit);
