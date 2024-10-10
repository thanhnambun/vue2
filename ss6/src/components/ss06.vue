<template >
  <div>
    <h3>TodoList</h3>
    <div class="container">
      <div class="todo">
        <h3 class="heading">Danh sách công việc</h3>
        <header class="header">
          <input v-model="inputValue" type="text" class="input"  placeholder="vui lòng thêm công việc"/>
          <button @click="handleAddJob" class="button button-add">Add job</button>
        </header>

        <ul class="list-item">
          <li v-for="(job, index) in jobs" :key="index" class="item">
            <div class="left">
              <input type="checkbox" v-model="job.completed" />
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

</script>
<style>
    
</style>