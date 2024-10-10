<template >
    <div>
        123123
    </div>
</template>
<script setup>
import { onBeforeUnmount,onUnmounted } from 'vue';
onBeforeUnmount(()=>{
    console.log("Component is about to be unmounted")
    
})
onUnmounted(()=>{
    console.log("unmounted: Component has been unmounted");
    
})
</script>
