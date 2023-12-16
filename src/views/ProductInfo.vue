<template>
    <div class="productInfo" v-if="productInfo">
        <div class="productInfo__wrapper container">
            <img v-lazy="productInfo.images ? productInfo.images[0] : ''" alt="">
            <div class="productInfo__wrapper-desc">
                <h2 class="productInfo__wrapper-desc-title">{{ productInfo.title }}</h2>
                <p class="productInfo__wrapper-desc-desc">{{ productInfo.description }}</p>
                <span class="productInfo__wrapper-desc-price">Цена: {{ productInfo.price }} 000 сум</span>
                <span class="productInfo__wrapper-desc-disc">Скидка: {{ productInfo.discountPercentage }}%</span>
                <span class="productInfo__wrapper-desc-stock">Количество: {{ productInfo.stock }}</span>
                <span class="productInfo__wrapper-desc-stock">Общая цена: {{ Math.floor(productInfo.price -
                    productInfo.price / productInfo.discountPercentage) }} 000 сум</span>
                <button class="productInfo__wrapper-desc-basket"
                    @click="getBasket(); addToCartStore.add(id);">Добавить в корзину</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Navigation } from 'swiper/modules';
import { useRoute } from "vue-router";
import { useProductInfo } from "../store/productInfo"
import { computed, onMounted, ref } from "vue";
import { useAddToCart } from '../store/addToCart'
import { useBasket } from '../store/basket'

const basketStore = useBasket()

const route = useRoute();
const productInfoStore = useProductInfo()
const addToCartStore = useAddToCart()
const id = route.params.id
productInfoStore.getProductInfo(id)
const getBasket = () => {
    let arr = localStorage.arr ? JSON.parse(localStorage.arr) : []
    console.log(arr.indexOf(`${productInfo.value.id}`));
    if (arr.indexOf(`${productInfo.value.id}`) >= 0) {
        alert('Этот элемент уже существует')
    }else {
        basketStore.getItems()
    }
}

let productInfo = computed(() => productInfoStore.productInfo)

onMounted(async () => { })


</script>

<style lang="scss" scoped></style>