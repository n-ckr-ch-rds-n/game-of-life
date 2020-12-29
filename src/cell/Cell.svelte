<script lang="ts">
    export let state: boolean;
    const colorByState = {
        0: "white",
        1: "black"
    };
    let color: string = state ? "black" : "blue";
</script>

<main>
    <div class="square" style="background-color: {color}"></div>
    <p>{state}</p>
</main>

<style>
    .square {
        height: 50px;
        width: 50px;
    }
</style>
