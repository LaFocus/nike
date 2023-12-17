<template>
    <div class="category">
        <div class="category__wrapper container">
            <div class="category__wrapper-left">
                <select name="knopka" class="category__wrapper-left-price" v-model="selectedOption"
                    @change="$emit('emitFilter', selectedOption)">
                    <option value="stock">По количеству</option>
                    <option value="price">По цене</option>
                    <option value="title">По названию</option>
                </select>
            </div>
            <button class="category__wrapper-all">Общее кол-во товаров {{ limit }}</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['limit'])
const selectedOption = ref("price")
</script>

<style lang="scss" scoped></style>