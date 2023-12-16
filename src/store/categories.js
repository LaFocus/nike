import {
    defineStore
} from "pinia";
import axios from "axios"


export const useCategories = defineStore('categories', {
    state: () => ({
        arr: []
    }),
    actions: {
       async getCategories() {
        try {
            let response = await axios.get('https://dummyjson.com/products/categories')
            this.arr = response.data
        } catch (error) {
            console.log(error);
        }
       }
    }
})