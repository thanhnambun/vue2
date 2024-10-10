<template>
    <div>
        {{ count }}
        <TodoItem @increment="handle" />
    </div>
</template>
<script setup>
import { ref } from 'vue';
import TodoItem from './TodoItem.vue';

const count = ref("")
const handle = () => {
    count.value++
}
</script>
<style></style>