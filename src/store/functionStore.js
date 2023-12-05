import {defineStore} from "pinia";

export const useFunctionStore = defineStore('func', {
    state: () => ({
        func: '',
        arg: 0
    })
})