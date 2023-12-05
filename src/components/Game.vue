<template>
    <div id="game-component" class="d-flex flex-column align-items-center h-75" ref="gameFiled">

    </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Game",
    data() {
        return {
            field: [
                ['#', 'r', '#'],
                ['#', '#', '#'],
                ['#', '#', 't'],
            ],
            game: {}
        }
    },
    mounted() {
        this.createField()
        this.game.addObjects(this.$refs.gameFiled)
    },
    methods: {
        createField() {
            this.game = new Game(this.field)
            this.game.createFiled(this.$refs.gameFiled)
        }
    }

})
</script>

<style scoped>

</style>