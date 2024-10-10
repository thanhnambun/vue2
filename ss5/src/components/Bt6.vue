<template>
  <div>
    <h4>Bài6</h4>
    <p>Danh sách các số thỏa mãn điều kiện:</p>
    <p>
      <span v-for="(num, index) in filteredNumbers" :key="index">{{ num  }} </span>
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

    const array = ref([5, 12, 15, 22, 9, 18, 25, 30, 7, 33]);

    const filteredNumbers = computed(() => {
      return array.value.filter(num => num % 3 === 0);
    });

</script>

<style >

</style>