<template>
    <div>
        <h1>Bt10</h1>
        <p>Current Time: {{ currentTime }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const currentTime = ref("");

const updateTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    currentTime.value = `${hours} : ${minutes} : ${seconds}`;
};

let a;

onMounted(() => {
    updateTime(); 
    a = setInterval(updateTime, 1000);  
});

onBeforeUnmount(() => {
    clearInterval(a);
});
</script>


