<template>
    <div>
        <button @click="showModal">Open Modal</button>

        <Modal :isVisible="isModalVisible" @close="closeModal">
            <template #title>
                <h2>Thông báo từ hệ thống</h2>
            </template>

            <template #content>
                <p>Đây là nội dung của modal. Bạn có thể đóng modal bằng cách nhấn vào nút 'Close'.</p>
            </template>
        </Modal>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue'; 
const isModalVisible = ref(false);

const showModal = () => {
    isModalVisible.value = true; 
};

const closeModal = () => {
    isModalVisible.value = false; 
};
</script>
