<template>
    <div class="modal-overlay" v-if="isVisible">
        <div class="modal">
            <header>
                <slot name="title"></slot>
            </header>
            <main>
                <slot name="content"></slot>
            </main>
            <footer>
                <button @click="closeModal">Close</button>
            </footer>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    isVisible: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(['close']);

const closeModal = () => {
    emit('close'); 
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
}
</style>
