<template>
    <div>
        <h1>đếm</h1>
        <p>Count: {{ count }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const count = ref(0);
let intervalId;

onMounted(() => {
    intervalId = setInterval(() => {
        count.value++;
    }, 1000);
});

onBeforeUnmount(() => {
    clearInterval(intervalId);
});
</script>


