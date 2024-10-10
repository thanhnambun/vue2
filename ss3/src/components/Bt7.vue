<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" placeholder="Nhập tên của bạn" />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const name = ref('');

const handleSubmit = () => {
  console.log('Form submission prevented!');
};
</script>

<style>
</style>
