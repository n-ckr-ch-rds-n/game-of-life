<script lang="ts">
    export let state: number;
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
