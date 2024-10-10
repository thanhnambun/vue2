<template >
    <div>
        {{ count }}
        <CountChildren @increment="handle"/>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import CountChildren from './CountChildren.vue';
const count = ref(0)
const handle = () =>{
    count.value++
}
</script>
<style >
    
</style>