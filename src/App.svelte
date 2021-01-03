<script lang="ts">
    import {MatrixUpdater} from "./matrix updater/matrix.updater";
    import {CellStateCalculator} from "./cell-state calculator/cell.state.calculator";
    import {matrixStore} from "./matrix store/matrix.store";
    import {MatrixInitialiser} from "./matrix initialiser/matrix.initialiser";
    import Row from "./row/Row.svelte";
    import {onDestroy} from "svelte";
    const calculator = new CellStateCalculator();
    const updater = new MatrixUpdater(calculator);
    const initialiser = new MatrixInitialiser();
    const initialMatrix = initialiser.initialise({width: window.innerWidth, height: window.innerHeight});
    matrixStore.update(() => initialMatrix);

    const timer = setInterval(() => {
        matrixStore.update(currentValue => updater.updateMatrix(currentValue));
    }, 10);

    console.log("WTF");

    onDestroy(() => clearInterval(timer));

</script>
<main>
    {#each $matrixStore as row}
        <Row row={row}/>
    {/each}
</main>
