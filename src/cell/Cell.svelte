<script lang="ts">
    import {cellSideLength} from "../cell.side.length";
    export let state: boolean;
    const cellDimensions = `width: ${cellSideLength}px; height: ${cellSideLength}px`;
</script>

<div class="cell" class:alive={state} style={cellDimensions}></div>

<style>
    .cell {
        background-color: lightblue;
    }

    .cell.alive {
        background-color: black;
    }
</style>
