<template>
  <div>
    <h3>Bài 10</h3>
    <button @click="addRandomNumber">Random number</button>

    <p>{{ numbers }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const numbers = ref([]);

const addRandomNumber = () => {
  const randomNum = Math.floor(Math.random() * 10) + 1; 
  numbers.value.push(randomNum);
};
</script>

<style >

</style>