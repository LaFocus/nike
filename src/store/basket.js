import {
    defineStore
} from "pinia";
import axios from "axios"


export const useBasket = defineStore('getBasket', {
    state: () => ({
        localArr: [],
        totalPrice: 0
    }),
    actions: {
        async getItems() {
            let arr = localStorage.arr ? JSON.parse(localStorage.arr) : []
            for (let i = 0; i < arr.length; i++) {
                let item = arr[i]
                try {
                    let response = await axios.get(`https://dummyjson.com/products/${item}`)
                    this.totalPrice += response.data.price
                    this.localArr.push(response.data)
                } catch (error) {
                    console.log(error);
                }

            }
        },
        deleteItem(index) {
            let arr = localStorage.arr ? JSON.parse(localStorage.arr) : []
            arr.splice(index, 1)
            localStorage.setItem('arr', JSON.stringify(arr))
        }
    }
})