<template>
    <div>
        <button @click="handleclick">delete</button>
    </div>
</template>
<script setup>

const emit = defineEmits(["count"])
function handleclick() {
    emit('delete')
}
</script>
<style></style>