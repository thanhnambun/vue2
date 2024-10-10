<template>
    <div>
        <input type="radio" v-model="a" value="nam" >Nam
        <input type="radio" v-model="a" value="nữ" >Nữ
        <input type="radio" v-model="a" value="khác" >Khác
        <p> tiến độ hoàn thành :{{ a }}</p>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const a = ref("khác")
</script>
