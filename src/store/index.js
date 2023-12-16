import {
    defineStore
} from "pinia";
import axios from "axios"

export const useProduct = defineStore('product', {
    state: () => ({
        arr: [],
        totalPrice: null,
        isFilterActive: false
    }),
    actions: {
        async getProducts(limit) {
            try {
                let response = await axios.get(`https://dummyjson.com/products?limit=${limit ? limit : 12}`)
                this.arr = response.data.products
            } catch (error) {
                console.log(error);
            }
        },
        async getTotalPrice() {
            await this.getProducts()
            for (let i = 0; i < this.arr.length; i++) {
                const element = this.arr[i];
                this.totalPrice *= element.price
            }
            this.totalPrice *= 1000
        },
        async sortGoods(way) {
            await this.getProducts()
            way == 'title' ?
                this.arr = this.arr.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())) : way == 'price' ?
                    this.arr = this.arr.sort((a, b) => a.price - b.price) : way == 'stock' ?
                        this.arr = this.arr.sort((a, b) => a.stock - b.stock) : ''
        },
        async filterProducts(category) {
            await this.getProducts(100)
            this.arr = this.arr.filter((item) => item.category == category)
            this.isFilterActive = true
        }
    }
})