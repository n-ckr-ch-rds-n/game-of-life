<script lang="ts">
	import Cell from "./cell/Cell.svelte"

    let cells = [1, 2, 3, 4];
</script>
{#each cells as cell}
    <Cell state={7}/>
{/each}
