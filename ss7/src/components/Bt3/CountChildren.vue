<template>
    <div>
        <button @click="handleclick">Increment</button>
    </div>
</template>
<script setup>

    const emit = defineEmits(["count"])
    function handleclick() {
        emit('Increment')
    }
</script>
<style></style>