<template>
    <div>
        <input type="date" v-model="a">
        <p> ngày sinh :{{ a }}</p>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const a = ref("")
</script>
