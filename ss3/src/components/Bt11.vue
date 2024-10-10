<template>
  <div>
    <div v-if="isVueIf" :style='{ backgroundcolor:"red" }'>Nội dung của thẻ div khi điều kiện đúng</div>
    <div v-else :style="{ color: 'blue' }">Nội dung của thẻ div khi điều kiện sai</div>

    <button @click="toggleActive">background</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isVueIf = ref(true);

const toggleActive = () => {
  isVueIf.value = !isVueIf.value;
};
</script>

<style>
</style>
