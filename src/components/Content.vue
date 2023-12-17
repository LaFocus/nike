<template>
    <div class="content">
        <ContentСategory @emitFilter="emitFilter" :limit="limit"/>
        <ContentProduct :filterValue="filterValue" @limitChanged="emitLimit"/>
    </div>
</template>

<script setup>
import ContentСategory from './ContentСategory.vue';
import ContentProduct from './ContentProduct.vue';
import { ref } from "vue";

let filterValue = ref('')
let limit = ref(12)

const emitFilter = (v) => {
    filterValue.value = v
}

const emitLimit = (v) => {
    limit.value = v
}

</script>

<style lang="scss" scoped></style>