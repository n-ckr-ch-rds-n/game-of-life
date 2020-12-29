import {writable} from "svelte/store";
import {Matrix} from "../matrix updater/matrix";

export const matrixStore = writable<Matrix>([]);
