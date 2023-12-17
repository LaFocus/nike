<template>
  <div class="product container">
    <Product v-for="(item, i) in productArr" :key="i" :productData="item" />
  </div>
</template>

<script setup>
import Product from './Product.vue';
import { useProduct } from "@/store/index.js";
import { computed, watchEffect, ref, onMounted, watch } from "vue"; 

const emit = defineEmits(['limitChanged'])
const productStore = useProduct()
const productArr = computed(() => productStore.arr)
const isActiveRef = ref(false)
const isActive = computed(() => productStore.isFilterActive)
isActiveRef.value = isActive
const limit = ref(12)
productStore.getProducts(12)

const props = defineProps({
  filterValue: {
    type: String,
    required: true
  }
})

const changePage = () => {
  limit.value += 12
  productStore.getProducts(limit.value)
}

watchEffect(() => {
  productStore.sortGoods(props.filterValue)
});

watch(limit, () => {
  emit('limitChanged', limit.value)
})


document.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    changePage()
  }
});


onMounted(async () => {
  await productStore.getProducts(limit.value)
  productStore.filterProducts('smartphones')
  // isActive.value = true
})
</script>

<style lang="scss" scoped></style>
