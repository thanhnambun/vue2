<template>
  <div>
    <h4>Bài7</h4>
    <button 
      v-for="index in 3" 
      :key="index" 
      :class="{'active': activeIndex === index}" 
      @click="setActive(index)">
      Button {{ index }}
    </button>

    <p>Khi nhấn Button {{ activeIndex }}</p>
  </div>
</template>
.
<script setup>
import { ref } from 'vue';
    const activeIndex = ref(1);

    const setActive = (index) => {
      activeIndex.value = index;
    };

</script>

<style >
button.active {
  background-color: red;
  color: white;
 
}
</style>