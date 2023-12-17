<template>
    <div class="navbar">
        <div class="navbar__wrapper container">
            <router-link to="/">
                <img src="@/assets/images/logo.png" alt="">
            </router-link>
            <nav class="navbar__wrapper-nav">
                <ul class="navbar__wrapper-nav-list">
                    <li class="navbar__wrapper-nav-list-item" @click="productStore.getProducts()" ><a href="#"
                            class="navbar__wrapper-nav-list-item-link">Главная</a></li>
                    <li class="navbar__wrapper-nav-list-item"><a href="#"
                            class="navbar__wrapper-nav-list-item-link" @click="activeToggle">Категории</a></li>
                </ul>
            </nav>
            <img class="navbar__wrapper-btn" src="@/assets/images/basket.svg" alt="" @click="modalToggle()">
        </div>
        <Basket v-if="basketIsVisible" @emitCloseBasket="modalToggle"/>
        <div class="navbar__wrapper-categories" :class="{active: activeVal}">
            <button class="btn" v-for="item in categoriesArr" :key="item" @click="productStore.filterProducts(item); activeToggle()">{{ item }}</button>
        </div>
    </div>
</template>

<script setup>

import { useProduct } from "@/store/index.js";
import { useCategories } from "@/store/categories.js";
import { computed, ref } from 'vue'
import Basket from '@/components/Basket.vue'

const productStore = useProduct()
const categoriesStore = useCategories()

const activeVal = ref(false)
const activeToggle = () => {
    activeVal.value = !activeVal.value
}
const basketIsVisible = ref(false)
const categoriesArr = computed(() => categoriesStore.arr)

categoriesStore.getCategories()

const modalToggle = () => {
    basketIsVisible.value = !basketIsVisible.value
}

</script>

<style lang="scss" scoped></style>