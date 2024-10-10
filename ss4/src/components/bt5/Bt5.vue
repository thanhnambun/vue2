<template>
  <div>
    <h2>Giỏ hàng</h2>
    <ul>
      <li v-for="(item, index) in cart" :key="index">
        {{ item.name }} - Số lượng: {{ item.quantity }}
        <button @click="increaseQuantity(index)">Tăng số lượng</button>
      </li>
    </ul>
    <p><strong>Tổng số lượng sản phẩm:</strong> {{ totalQuantity }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
    const cart = ref([
      { name: 'Mền Mền Loại 1', quantity: 3 },
      { name: 'Mền Mền Loại 2', quantity: 5 },
      { name: 'Mền Mền Loại 3', quantity: 1 }
    ]);

    // Tính tổng số lượng sản phẩm trong giỏ hàng sử dụng computed
    const totalQuantity = computed(() => {
      return cart.value.reduce((total, item) => total + item.quantity, 0);
    });

    // Hàm tăng số lượng sản phẩm
    const increaseQuantity = (index) => {
      cart.value[index].quantity += 1;
    };

   
</script>

<style>
</style>