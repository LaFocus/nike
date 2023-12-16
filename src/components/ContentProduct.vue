<template>
  <div class="product container">
    <Product v-for="(product, i) in productArr" :key="i" :productData="product" />
  </div>
</template>
<script setup>

import Product from './Product.vue';
import { useProduct } from "@/store/index.js";
import { computed, watchEffect, ref, onMounted } from "vue";
const productStore = useProduct()
const productArr = computed(() => productStore.arr)
const isActive = computed(() => productStore.isFilterActive)
const limit = ref(12)
const currentPage = ref(1)
productStore.getProducts(12)

const props = defineProps({
  filterValue: {
    type: String,
    required: true
  }
})

const changePage = () => {
  limit.value += 12
  currentPage.value++
  productStore.getProducts(limit.value)
}

watchEffect(() => {
  productStore.sortGoods(props.filterValue)
});

if (!isActive.value) {
  document.addEventListener("scroll", () => {
    if (
      (window.scrollY + window.innerHeight <= document.documentElement.scrollHeight && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight)
    ) {
      changePage()
    }
  });
}

onMounted(async () => {
  await productStore.getProducts(limit.value)
  productStore.filterProducts('smartphones')
})
</script>

<style lang="scss" scoped></style>