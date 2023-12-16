<template>
    <div class="product__card" v-if="productData">
        <img class="product__card-img" :src="productData.thumbnail" alt="">
        <div class="product__card-desc">
            <h2 class="product__card-desc-title">{{ productData.title }}</h2>
            <div class="product__card-desc-pay">
                <p class="product__card-desc-pay-price">{{ productData.price.toLocaleString() }} 000 сум</p>
                <router-link :to="`/product/${props.productData.id}`">
                    <button class="product__card-desc-pay-btn">Обзор</button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    productData: {
        type: Object
    }
})
</script>

<style lang="scss" scoped></style>