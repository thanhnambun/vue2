<template>
  <div>
    <p>Số lần nhấn: {{ count }}</p>
    
    <button @click="incrementCount">Tăng count</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'; 
const count = ref(0);

const incrementCount = () => {
  count.value++;
};
</script>

<style>
</style>
