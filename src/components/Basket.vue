<template>
  <div class="basket">
    <div class="basket__wrapper-modal">
      <div class="basket__wrapper-modal-top">
        <h2 class="basket__wrapper-modal-top-backet">Корзина</h2>
        <button class="basket__wrapper-modal-top-close" @click="$emit('emitCloseBasket')">
          <div class="basket__wrapper-modal-top-close-f"></div>
          <div class="basket__wrapper-modal-top-close-s"></div>
        </button>
      </div>
      <div class="basket__wrapper-modal-list" v-if="cartArr.length">
        <div class="basket__wrapper-modal-list-item" v-for="(item, index) in cartArr" :key="item.id">

          <img v-lazy="item.images[0]" alt="">
          <span>
            {{ item.title }}
          </span>
          <span>
            {{ (item.price * 12500).toLocaleString() }} сум
          </span>
          <button @click="basketStore.deleteItem(index); deleteItem($event)">
            Удалить 
          </button>
        </div>

      </div>
      <div class="basket__wrapper-modal-bottom">
        <h2 class="basket__wrapper-modal-bottom-pay">К оплате</h2>
        <p class="basket__wrapper-modal-bottom-sum">
          {{ (basketStore.totalPrice*12500).toLocaleString()}} сум
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useBasket } from "../store/basket";

const basketStore = useBasket();
const cartArr = computed(() => basketStore.localArr);

  
const deleteItem = (event) => {
  event.target.parentNode.style.display='none'
}

</script>

<style lang="scss" scoped></style>
