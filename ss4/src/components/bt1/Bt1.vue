<script setup>
import { ref } from "vue";
let count = ref(0);
const handleCount = () => {
  count.value++;
};
</script>

<template>
<div>
    <h3> Bai1 </h3>
    <p>Sau khi bấm {{ count }} </p>
    <button @click="handleCount">Click {{ count }} lần</button>
</div>
</template>
