<template>
    <div id="game-code" class="container h-75 bg-dark">
        <pre>
            <code class="language-javascript bg-dark" ref="code">{{ this.strFuncs }}</code>
        </pre>
    </div>
    <div id="game-buttons" class="container h-25">
        <p @click="move">move</p>
    </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Code",
    data() {
        return {
            funcs: [],
            strFuncs: ``
        }
    },
    methods: {
        move() {
            this.funcs.push(`move()`)
            this.strFuncs += 'move()\n'

            console.log(this.strFuncs)

        }
    },
    // watch: {
    //     funcs(value) {
    //         alert(value)
    //     }
    // }
})
</script>


<style scoped>

</style>