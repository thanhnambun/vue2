<template>
  <div>
    <h3>Bài9</h3>
    <h3>Gender: {{ currentGender }}</h3>
    <button @click="randomGender">Random gender</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const genders = ['Nam', 'Nữ'];

const currentGender = ref('Nam');

const randomGender = () => {
  const randomIndex = Math.floor(Math.random() * genders.length);
  currentGender.value = genders[randomIndex];
};
</script>

<style >

</style>