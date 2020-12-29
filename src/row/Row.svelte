<script lang="ts">
    import Cell from "../cell/Cell.svelte";
    export let row;
</script>

<div class="row">
    {#each row as cellState}
        <span class="cell">
            <div class="cell" style="background-color: {cellState ? 'black' : 'lightblue'}">
            </div>
        </span>
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

        width: 10px;
        height: 10px;
    }
</style>
