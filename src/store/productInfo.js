import {
    defineStore
} from "pinia";
import axios from "axios"

export const useProductInfo = defineStore('productInfo', {
    state: () => ({
        productInfo: {},
    }),
    actions: {
        async getProductInfo(id) {
            try {
                let response = await axios.get(`https://dummyjson.com/products/${id}`)
                this.productInfo = response.data
            } catch (error) {
                console.log(error);
            }
        }
    }
})