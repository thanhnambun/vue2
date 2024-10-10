<template>
  <div>
    <input v-model.number="itemPrice" type="number" placeholder="Nhập giá trị" />


    <button @click="addToCart">Add to cart</button>

    
    <p>Giá trị sản phẩm hiện tại: {{ itemPrice }} VND</p>
    <p><strong>Tổng tiền trong giỏ hàng:</strong> {{ totalPrice }} VND</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
    const itemPrice = ref(0);

    const total = ref(0);

    const totalPrice = computed(() => total.value);

    const addToCart = () => {
      if (itemPrice.value > 0) {
        total.value += itemPrice.value;
      }
      itemPrice.value = 0; 
    };

</script>

<style >

</style>