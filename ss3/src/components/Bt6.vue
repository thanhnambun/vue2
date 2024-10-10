<template lang="">
    <div>
        <p v-on:click="handleClick ('rekki')">Get param</p>
    </div>
</template>
<script setup>
const handleClick=(param)=>{
    console.log(param);
    
}
</script>
<style lang="">
    
</style>