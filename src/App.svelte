<script lang="ts">
	import Cell from "./cell/Cell.svelte"

    let cells = [{state: 1}, {state: 1}];
</script>
{#each cells as cell}
    <Cell state={cell.state}/>
{/each}
