<template >
    <div>
        <input type="color" v-model="a">
        <p>{{ a }}</p>
    </div>
</template>
<script setup>
import {ref} from 'vue'
const a = ref("#000")
</script>
<style lang="">
    
</style>