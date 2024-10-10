<template>
  <div>
    <h4>Bài5</h4>
    <p>Các số chẵn từ mảng:</p>
    <p>
      <span v-for="(num, index) in evenNumbers" :key="index">{{ num }} </span>
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
    const array = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const evenNumbers = computed(() => {
      return array.value.filter(num => num % 2 === 0);
    });
</script>

<style >

</style>