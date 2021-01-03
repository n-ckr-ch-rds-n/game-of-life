<script lang="ts">
    import Cell from "../cell/Cell.svelte";
    export let row;
</script>

<div class="row">
    {#each row as cellState}
        <Cell state={cellState}/>
    {/each}
</div>

<style>
    .row {
        overflow: hidden;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
</style>
