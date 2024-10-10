<template >
    <div>
        bt6
        <button @click="handleClick">Increment</button>
        <p>{{ number }}</p>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const number = ref("1")
const handleClick = () =>{
    number.value ++;
    document.title = number.value
}
</script>
<style >
    
</style>