<template>
  <div>
    <h4>Bài3</h4>
    <p>Quyền hạn của bạn là: 
      <strong v-if="userRole === 'admin'">Admin</strong>
      <strong v-else-if="userRole === 'user'">User</strong>
      <strong v-else>Guest</strong>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
    const userRole = ref('guest'); 
</script>

<style >
</style>