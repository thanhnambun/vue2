<template>
  <div>
    <h4>Bai2</h4>
    <!-- Hiển thị giá trị của company và age -->
    <p>Company: {{ info.company }}</p>
    <p>Age: {{ info.age }}</p>
    <!-- Nút để thay đổi giá trị của company và age -->
    <button @click="changeData">Change data</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
 
    const info = reactive({
      company: 'Rikkei Academy',
      age: 2
    });

    const changeData = () => {
      info.company = 'Rikkei Education';
      info.age = 1;
    };
 
</script>

<style >

</style>