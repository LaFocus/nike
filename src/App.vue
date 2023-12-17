<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import { useBasket } from './store/basket'

const basketStore = useBasket()

basketStore.getItems();
</script>

<style lang="scss" scoped></style>