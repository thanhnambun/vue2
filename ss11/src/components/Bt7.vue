<template>
    <div>
        bt7
        <input type="text" v-model="vb">
    </div>
</template>
<script setup>
import { ref, onUpdated } from 'vue';

const vb = ref("")
onUpdated(()=>{
    document.title = vb.value
})
</script>
<style></style>