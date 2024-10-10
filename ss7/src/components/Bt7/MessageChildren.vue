<template >
    <div>
        <button @click="sendMessage">send Mess</button>
    </div>
</template>
<script>
import { defineEmits } from 'vue';

const emit = defineEmits(['send-message']);

const sendMessage = () => {
    emit('send-message');
};
</script>
<style >
    
</style>