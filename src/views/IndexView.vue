<script>
import {defineComponent} from 'vue'
import Code from "@/components/Code.vue";
import Game from "@/components/Game.vue";

export default defineComponent({
    name: "IndexView",
    components: {Game, Code}
})
</script>

<template>

    <div class="wrapper d-flex flex-column justify-content-center bg-light">
        <div class="container-fluid p-2 d-flex" id="game">
            <div class="container w-50 h-100 p-0" id="game-controls">
                <Code/>
            </div>
            <div class="container w-50 h-100 p-0">
               <Game/>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>