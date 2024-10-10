<template>
  <div>
    <h3>II . BÀI TẬP </h3>
    <h4>Bai1</h4>
    <button @click="toggleShow">Hiện</button>
    <p v-if="isShow">Rikkei Education</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
    const isShow = ref(false);
    const toggleShow = () => {
      isShow.value = true; 
    };
</script>

<style >
</style>