<template>
    <div>
        <h1>Bt4</h1>
        <p> age : {{ age }}</p>
        <button @click="handleClick">Increase age</button>
        <Bt4Chiled :ages="age"></Bt4Chiled>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Bt4Chiled from './Bt4Chiled.vue';
const age = ref(0)
const handleClick = () => {
    age.value++
}
</script>
<style></style>