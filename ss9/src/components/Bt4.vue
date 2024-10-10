<template>
    <div>
        <input type="range" v-model="a">
        <p> tiến độ hoàn thành :{{ a }}</p>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const a = ref("")
</script>
