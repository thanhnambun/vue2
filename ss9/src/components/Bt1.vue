<template>
    <div>
       <label for="">email</label>
       <input type="text" v-model="a">
       <p>{{ a }}</p>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const a= ref("rikke")
</script>
