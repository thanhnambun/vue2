<template>
    <div>
        <div v-bind:class="elementId" >
            Đây là một phần tử với id và class được gán từ các biến.
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const elementId = ref('my-element-id')
const elementClass = ref('my-element-class another-class')
</script>

<style scoped>
.my-element-id {
    color: blue;
    font-weight: bold;
}

.another-class {
    background-color: lightgray;
    padding: 10px;
}
</style>
