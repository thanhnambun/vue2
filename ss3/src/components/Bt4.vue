<template>
  <div>
    <div v-if="isVueIf" :style="{color:'red'}">Nội dung của thẻ div</div>
    <div v-else :style="{color:'blue'}">Nội dung của thẻ div</div>

  </div>
</template>

<script setup>
const isVueIf = true;
</script>

<style>
</style>
