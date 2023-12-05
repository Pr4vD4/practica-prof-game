<template>
    <div id="game-code" class="container h-75 bg-dark">
        <button type="button" @click="back" class="btn btn-outline-warning">back</button>
        <pre>
            <code class="language-javascript bg-dark" ref="code" v-html="strFuncs"></code>
        </pre>
    </div>
    <div id="game-buttons" class="container h-25 d-flex" v-if="isFunc">
        <button type="button" @click="move(); setArg()" class="btn btn-outline-success">move()</button>
        <button type="button" @click="rotate()" class="btn btn-outline-success">rotate()</button>
        <button type="button" @click="take()" class="btn btn-outline-success">take()</button>
        <button type="button" @click="put()" class="btn btn-outline-success">put()</button>
    </div>
    <div id="game-buttons" class="container h-25 d-flex align-items-center" v-if="!isFunc">
        <label for="customRange2" class="form-label">Значние аргумента</label>
        <input type="range" class="form-range" min="0" max="5" id="customRange2" v-model="arg">
    </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Code",
    data() {
        return {
            funcs: [],
            strFuncs: ``,
            isFunc: true,
            arg: 0
        }
    },
    methods: {
        move() {

            this.funcs.push(`move()\n`)

            this.strFuncs += 'move()\n'
            this.strFuncs += hljs.highlight(this.funcs[this.funcs.length - 1], {
                language: 'javascript'
            }).value

        },
        rotate() {

            this.funcs.push(`rotate()`)
            // this.strFuncs += 'move()\n'
            this.strFuncs += hljs.highlight('rotate()\n', {
                language: 'javascript'
            }).value


        },
        take() {

            this.funcs.push(`take()`)
            // this.strFuncs += 'move()\n'
            this.strFuncs += hljs.highlight('take()\n', {
                language: 'javascript'
            }).value

        },
        put() {

            this.funcs.push(`put()`)
            // this.strFuncs += 'move()\n'
            this.strFuncs += hljs.highlight('put()\n', {
                language: 'javascript'
            }).value

        },
        back() {
            let back = this.strFuncs.split('\n')
            back.splice(-2, 1)
            // console.log(back)
            this.strFuncs = back.join('\n')
        },
        setArg() {
            this.isFunc = false

            // this.strFuncs =

        }
    },
    watch: {
        arg: (val) => {

            // let strFuncs = []

            console.log(this.move)

            // for (const func of this.funcs) {
            //     strFuncs.push(this.strFuncs += hljs.highlight(func+'\n', {
            //         language: 'javascript'
            //     }).value)
            // }
        }
    }
})
</script>


<style scoped>

</style>