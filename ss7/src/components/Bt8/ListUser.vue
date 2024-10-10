<template>
    <div>
        <!-- dùng props và emit -->

        <button @click="toggleForm">Add user</button>
        <FormAddUser :showForm="isFormVisible" @close-form="toggleForm" />
    </div>
</template>
<script>
import { ref } from 'vue';
import FormAddUser from './FormAddUser.vue';

const isFormVisible = ref(false);

const toggleForm = () => {
    isFormVisible.value = !isFormVisible.value;
}; 
</script>
<style lang="">

</style>