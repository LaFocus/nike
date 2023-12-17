<template>
    <div class="product__card" v-if="productData">
        <img class="product__card-img" :src="productData.thumbnail" alt="">
        <div class="product__card-desc">
            <h2 class="product__card-desc-title">{{ productData.title }}</h2>
            <div class="product__card-desc-pay">
                <p class="product__card-desc-pay-price">{{ (Math.round(productData.price -
                    productData.price / productData.discountPercentage) * 12500).toLocaleString() }} сум</p>
                <span class="product__card-desc-pay-disc">Sale {{ Math.ceil(productData.discountPercentage) }} %</span>
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
        type: Object,
        required: true
    }
})
</script>

<style lang="scss" scoped></style>