<template>
    <div>
        <input type="checkbox" v-model="a" value="Đá bóng">Đá bóng
        <input type="checkbox" v-model="a" value="bóng chuyền">Bóng chuyền
        <input type="checkbox" v-model="a" value="code">code
        <h4>Sở thích đã chọn:</h4>
        <ul>
            <li v-for="(hobby, index) in a" :key="index">
                {{ hobby }}
            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const a = ref([])
</script>
