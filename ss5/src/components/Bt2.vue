<template>
  <div>
    <h4>Bai2</h4>
    <button @click="toggleShow">{{ isShow ? 'Hiện' : 'Ẩn' }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
    const isShow = ref(false);
    const toggleShow = () => {
      isShow.value = !isShow.value; 
    };
</script>

<style>
</style>