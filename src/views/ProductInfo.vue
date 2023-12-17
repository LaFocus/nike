<template>
    <div class="productInfo" v-if="productInfo">
        <div class="productInfo__wrapper container">
            <Swiper :slides-per-view="1" :space-between="1" style="max-width: 450px">
                <swiper-slide v-for="(item, i) in productInfo.images">
                    <img class="productInfo__wrapper-img" v-lazy="productInfo.images ? productInfo.images[i] : ''" alt="">
                </swiper-slide>
            </Swiper>
            <div class="productInfo__wrapper-desc">
                <h2 class="productInfo__wrapper-desc-title">{{ productInfo.title }}</h2>
                <p class="productInfo__wrapper-desc-desc">{{ productInfo.description }}</p>
                <span class="productInfo__wrapper-desc-price">Цена: {{ (productInfo.price * 12500).toLocaleString() }}
                    сум</span>
                <span class="productInfo__wrapper-desc-disc">Скидка: {{ productInfo.discountPercentage }}%</span>
                <span class="productInfo__wrapper-desc-stock">Количество: {{ productInfo.stock }}</span>
                <span class="productInfo__wrapper-desc-stock">Общая цена: {{ (Math.floor(productInfo.price -
                    productInfo.price / productInfo.discountPercentage) * 12500).toLocaleString() }} сум</span>
                <button class="productInfo__wrapper-desc-basket" @click="getBasket(); addToCartStore.add(id);">Добавить в
                    корзину</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useProductInfo } from "../store/productInfo"
import { computed } from "vue";
import { useAddToCart } from '../store/addToCart'
import { useBasket } from '../store/basket'
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/scss";

const basketStore = useBasket()

const route = useRoute();
const productInfoStore = useProductInfo()
const addToCartStore = useAddToCart()
const id = route.params.id
productInfoStore.getProductInfo(id)
const getBasket = () => {
    let arr = localStorage.arr ? JSON.parse(localStorage.arr) : []
    if (arr.indexOf(`${productInfo.value.id}`) >= 0) {
        alert('Этот элемент уже существует')
    } else {
        basketStore.getItems()
        document.location.reload()
    }
}

let productInfo = computed(() => productInfoStore.productInfo)
</script>

<style lang="scss" scoped></style>