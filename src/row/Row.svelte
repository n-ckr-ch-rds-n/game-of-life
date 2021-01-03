<script lang="ts">
    export let row;
</script>

<div class="row">
    {#each row as cellState}
        <div class="cell" class:alive={cellState}></div>
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
        width: 10px;
        height: 10px;
    }

    .cell.alive {
        background-color: black;
    }
</style>
