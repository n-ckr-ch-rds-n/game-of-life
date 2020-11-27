<script lang="ts">
    export let state: number = 0;
</script>

<main>
    <div class="square"></div>
    <p>{state}</p>
</main>

<style>
    .square {
        height: 50px;
        width: 50px;
        background-color: black;
    }
</style>
