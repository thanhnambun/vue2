<template>
  <div>
    <h3>TodoList</h3>
    <div class="container">
      <div class="todo">
        <h3 class="heading">Danh sách công việc</h3>
        <header class="header">
          <input v-model="inputValue" type="text" class="input" />
          <button @click="handleAddJob" class="button button-add">Add job</button>
        </header>

        <ul class="list-item">
          <li v-for="(job, index) in jobs" :key="job.id" class="item">
            <div class="left">
              <input type="checkbox" v-model="job.completed" @change="updateLocalStorage" />
              <label :class="{ completed: job.completed }">{{ job.name }}</label>
            </div>
            <div class="right">
              <button @click="handleDeleteJob(index)" class="button button-delete">Delete</button>
            </div>
          </li>
        </ul>

        <footer class="footer">
          <p>Công việc hoàn thành:</p>
          <p><b>{{ completedJobs }}</b> / <b>{{ jobs.length }}</b></p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const inputValue = ref('');
const jobs = ref(JSON.parse(localStorage.getItem("jobs")) || []);

const updateLocalStorage = () => {
  localStorage.setItem('jobs', JSON.stringify(jobs.value));
};

const handleAddJob = () => {
  if (inputValue.value.trim() !== '') {
    jobs.value.push({
      name: inputValue.value,
      completed: false,
      id: Math.ceil(Math.random() * 98888888888),
    });
    inputValue.value = '';
    updateLocalStorage();
  }
};

const handleDeleteJob = (index) => {
  jobs.value.splice(index, 1);
  updateLocalStorage();
};

const completedJobs = computed(() => {
  return jobs.value.filter(job => job.completed).length;
});

watch(jobs, updateLocalStorage, { deep: true });
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.heading {
  text-align: center;
  font-size: 24px;
  padding-bottom: 24px;
}

.todo {
  width: 600px;
  border: 1px solid #dadada;
  padding: 20px 24px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 12px;
}

.input {
  height: 36px;
  border: 1px solid #dadada;
  outline: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  flex: 1;
  padding: 0 16px;
}

.button {
  height: 36px;
  border: 1px solid transparent;
  color: #fff;
  outline: none;
  border-radius: 4px;
  padding: 0 16px;
  cursor: pointer;
}

.button-add {
  background-color: blue;
}

.button-delete {
  background-color: red;
}

.list-item {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

input[type="checkbox"] {
  height: 18px;
  width: 18px;
}

.left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.right {
}

.footer {
  display: flex;
  gap: 8px;
}

.completed {
  text-decoration: line-through;
}
</style>
