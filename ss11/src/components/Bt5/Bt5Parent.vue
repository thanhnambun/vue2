<template>
    <div>
        <button @click="change">toggle</button>
        <Bt5Chiled v-if="ischeck"></Bt5Chiled>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Bt5Chiled from './Bt5Chiled.vue'
const ischeck = ref(true)
const change =()=>{
    ischeck.value = !ischeck.value
}
</script>
<style>
    
</style>