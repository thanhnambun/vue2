<script setup>
import { ref, computed } from 'vue';

    const width = ref(10);
    const height = ref(20);

    const acreage = computed(() => width.value * height.value);

    const increaseWidth = () => {
      width.value += 10;
    };


</script>

<template>
  <div>
    <h4>Bai3</h4>
    <p>Acreage: {{ acreage }}</p>
     <button @click="increaseWidth">Increase width</button>
  </div>
</template>
<style >

</style>