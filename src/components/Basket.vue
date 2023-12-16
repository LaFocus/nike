<template>
    <div class="navbar__wrapper-modal">
        <div class="navbar__wrapper-modal-top">
            <h2 class="navbar__wrapper-modal-top-backet">Корзина</h2>
            <button class="navbar__wrapper-modal-top-close" @click="$emit('emitCloseBasket')">
                <div class="navbar__wrapper-modal-top-close-f"></div>
                <div class="navbar__wrapper-modal-top-close-s"></div>
            </button>
        </div>
        <div class="navbar__wrapper-modal-list" v-if="cartArr">
            <div class="navbar__wrapper-modal-list-item" v-for="item in cartArr">
                {{ item.title }}
            </div>
        </div>
        <div class="navbar__wrapper-modal-bottom">
            <h2 class="navbar__wrapper-modal-bottom-pay">К оплате</h2>
            <p class="navbar__wrapper-modal-bottom-sum">{{ basketStore.totalPrice.toLocaleString() }} 000 сум</p>
        </div>
    </div>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue'
import { useBasket } from '../store/basket'

const basketStore = useBasket()
const cartArr = computed(() => basketStore.localArr)

onMounted(() => {
    basketStore.getItems()

})

</script>

<style lang="scss" scoped></style>
