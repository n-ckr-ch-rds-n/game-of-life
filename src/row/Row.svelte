<script lang="ts">
    export let row;
    import {cellSideLength} from "../cell.side.length";

    const cellDimensions = `width: ${cellSideLength}px; height: ${cellSideLength}px`
</script>

<div class="row">
    {#each row as cellState}
        <div class="cell" class:alive={cellState} style={cellDimensions}></div>
    {/each}
</div>

<style>
    .row {
        overflow: hidden;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }

    .cell {
        background-color: lightblue;
    }

    .cell.alive {
        background-color: black;
    }
</style>
