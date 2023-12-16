import {
    defineStore
} from "pinia";

export const useAddToCart = defineStore('addtocart', {
    state: () => ({
        localArr: []
    }),
    actions: {
        add(id) {
            // let arr = JSON.parse(localStorage.arr)
            let arr = localStorage.arr ? JSON.parse(localStorage.arr) : []
            if (arr.indexOf(`${id}`) == -1) {
                if (localStorage.arr) {
                    this.localArr = JSON.parse(localStorage.arr)
                    this.localArr.push(id)
                    localStorage.setItem('arr', JSON.stringify(this.localArr))
                } else {
                    this.localArr.push(id)
                    localStorage.setItem('arr', JSON.stringify(this.localArr))
                }
            }
        }
    }
})