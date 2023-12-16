<template>
    <div class="content">
        <ContentСategory @emitFilter="emitFilter" />
        <ContentProduct :filterValue="filterValue" />
    </div>
</template>

<script setup>
import ContentСategory from './ContentСategory.vue';
import ContentProduct from './ContentProduct.vue';
import { ref } from "vue";

let filterValue = ref('')

const emitFilter = (v) => {
    filterValue.value = v
}

</script>

<style lang="scss" scoped></style>