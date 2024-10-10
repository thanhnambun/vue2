<template >
    <div>
        parent1111
        <Child :propName="message"></Child>
    </div>
</template>
<script setup>
import { ref } from "vue";
const message = ref("hello")
</script>
<style >
    
</style>