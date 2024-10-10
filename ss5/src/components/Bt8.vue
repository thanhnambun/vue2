<template>
  <div>
    <h4>Bài8</h4>
    <button @click="sortAscending" :class="{ active: isAscending }">Tăng dần</button>
    
    <button @click="sortDescending" :class="{ active: !isAscending }">Giảm dần</button>

    <br/>
    <br/>
    <div>
      <span v-for="(num, index) in numbers" :key="index" class="number">{{ num }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

    const numbers = ref([1,2,3,4,5,6,7,8,9]);

    const isAscending = ref(true);

    const sortAscending = () => {
      numbers.value.sort((a, b) => a - b);
      isAscending.value = true;
    };

    const sortDescending = () => {
      numbers.value.sort((a, b) => b - a);
      isAscending.value = false;
    };

</script>

<style scoped>
button {
  padding: 10px 20px;
  margin-right: 10px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  font-size: 16px;
}

button.active {
  background-color: rgb(39, 120, 120);
  color: rgb(245, 245, 245);
}

.number {
  display: inline-block;
  padding: 10px;
  font-size: 20px;
  border: 1px solid black;
  margin-right: 5px;
}
</style>