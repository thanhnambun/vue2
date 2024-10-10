<template>
    <div>
        <input type="text" :disabled="isDisable" placeholder="Nhập dữ liệu...">

        <button @click="toggleDisable">Bật/Tắt trạng thái Disable</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isDisable = ref(true);

const toggleDisable = () => {
    isDisable.value = !isDisable.value;
};
</script>
