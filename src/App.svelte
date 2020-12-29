<script lang="ts">
	import Cell from "./cell/Cell.svelte"
    import {MatrixUpdater} from "./matrix updater/matrix.updater";
    import {CellStateCalculator} from "./cell-state calculator/cell.state.calculator";
    import {matrixStore} from "./matrix store/matrix.store";

	const calculator = new CellStateCalculator();
    const updater = new MatrixUpdater(calculator);
    setInterval(() => {
        matrixStore.update((currentValue) => {
            const newValue = updater.updateMatrix(currentValue);
            console.log("NEW MATRIX VALUE", newValue);
            return newValue;
        });
    }, 5000)
    let cells = [{state: 1}, {state: 1}];
</script>
{#each cells as cell}
    <Cell state={cell.state}/>
{/each}
