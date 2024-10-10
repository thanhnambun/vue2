<template lang="">
    <div>
        <p v-on:click="log">Click me</p>
    </div>
</template>
<script setup>
const log=()=>{
    console.log("Clicked");
    
}
</script>
<style lang="">
    
</style>