<script lang="ts">
    export let state: boolean;
    const colorByState = {
        0: "white",
        1: "black"
    };
    let color: string = state ? "black" : "lightblue";
</script>

<!--<main>-->
<!--    <div class="square" style="background-color: {color}"></div>-->
<!--&lt;!&ndash;    <p>{state}</p>&ndash;&gt;-->
<!--</main>-->

<!--<div class="square" style="background-color: {color}"></div>-->

<span><div class="square" style="background-color: {color}"></div></span>

<style>
    .square {
        height: 20px;
        width: 10px;
    }
</style>
