<script lang="ts">
	import Cell from "./cell/Cell.svelte"
    import {MatrixUpdater} from "./matrix updater/matrix.updater";
    import {CellStateCalculator} from "./cell-state calculator/cell.state.calculator";
    import {matrixStore} from "./matrix store/matrix.store";
    import {MatrixInitialiser} from "./matrix initialiser/matrix.initialiser";

	const calculator = new CellStateCalculator();
    const updater = new MatrixUpdater(calculator);
    const initialiser = new MatrixInitialiser();
    const initialMatrix = initialiser.initialise(window.innerWidth);
    updater.updateMatrix(initialMatrix);

    setInterval(() => {
        matrixStore.update((currentValue) => {
            const newValue = updater.updateMatrix(currentValue);
            console.log("new val", newValue);
            return newValue;
        });
    }, 5000)
    let cells = [{state: 1}, {state: 1}];
</script>
{#each cells as cell}
    <Cell state={cell.state}/>
{/each}
