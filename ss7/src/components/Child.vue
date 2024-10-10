<template>
    <div>
        Child
        <p>giá trị nhận về từ cha::{{props. propName }}</p>
    </div>
</template>
<script setup>
    const props =defineProps("propName")
    console.log("giá trị props",props);
    
</script>
<style lang="">
    
</style>