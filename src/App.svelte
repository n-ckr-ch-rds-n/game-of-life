<script lang="ts">
	import Cell from "./cell/Cell.svelte"
    import {MatrixUpdater} from "./matrix updater/matrix.updater";
    import {CellStateCalculator} from "./cell-state calculator/cell.state.calculator";
    import {matrixStore} from "./matrix store/matrix.store";
    import {MatrixInitialiser} from "./matrix initialiser/matrix.initialiser";

    let matrix;

	const calculator = new CellStateCalculator();
    const updater = new MatrixUpdater(calculator);
    const initialiser = new MatrixInitialiser();
    const initialMatrix = initialiser.initialise(window.innerWidth);
    matrixStore.update(() => initialMatrix);

    const unsubscribe = matrixStore.subscribe(m => {
        matrix = m;
    })

    setInterval(() => {
        matrixStore.update(currentValue => updater.updateMatrix(currentValue));
    }, 5000);

    let cells = [{state: 1}, {state: 1}];
</script>
{#each matrix as row}
    <div>ROW</div>
{/each}
