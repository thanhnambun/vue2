<template>
  <div>
    <h4>Bài4</h4>
    <!-- Hai nút "Hiển thị" và "Ẩn" -->
    <button @click="showMessage">Hiển thị</button>
    <button @click="hideMessage">Ẩn</button>
    
    <p v-show="isVisible">
      Thông báo: <strong>Welcome to Rikkei Education</strong>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
    const isVisible = ref(false);

    const showMessage = () => {
      isVisible.value = true;
    };

    const hideMessage = () => {
      isVisible.value = false;
    };

</script>

<style >
</style>