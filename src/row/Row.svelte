<script lang="ts">
    import Cell from "../cell/Cell.svelte";
    export let row;
</script>

<main>
    {#each row as cellState}
        <Cell state="{cellState}"></Cell>
    {/each}
</main>

<style>
    .square {
        height: 50px;
        width: 50px;
    }
</style>
