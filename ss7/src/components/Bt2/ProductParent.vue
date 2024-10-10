<template >
  <div>
    1111111111
    <ProductChildren :product="products" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import ProductChildren from './ProductChildren.vue';
const products = ref({
  id: 1,
  name: "Laptop",
  price: 1200,
  quantity: 10
});
</script>
