<template>
  <div>
    <input 
      type="text" 
      v-model="inputText" 
      @keydown="handleKeyDown" 
      placeholder="Nhập văn bản và nhấn Shift + Enter"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const inputText = ref('');

const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    if (event.shiftKey) {
      alert(inputText.value);
    } else {
      alert("Bạn cần nhấn Shift + Enter");
    }
  }
};
</script>

<style>
</style>
