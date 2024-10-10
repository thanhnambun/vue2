<template>
  <div>
    <!-- <h1>vue api</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
        <button @click="deleteUser(user.id)">xóa người dùng</button>
        <button @click="updateUser(user.id,user.name)">cập nhật người dùng</button>
      </li>
    </ul>
    <button @click="addUser">thêm người dùng</button> -->
    <Bt12/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Bt12 from './components/Bt12.vue';

const users = ref([]);

const getData = async () => {
  try {
    const response = await fetch('http://localhost:3000/user');
    const jsonData = await response.json();
    users.value = jsonData;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

onMounted(() => {
  getData();
});

const addUser = async () => {
  const newUser = {  name: 'Thu Trang' };
  await fetch('http://localhost:3000/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  });
  getData(); 
};

const deleteUser = async (id) => {
  await fetch(`http://localhost:3000/user/${id}`, {
    method: 'DELETE'
  });
  getData(); 
};

const updateUser = async (id) => {
  
  const updatedUser = {
    name: 'Thảo Phương'
  };
  await fetch(`http://localhost:3000/user/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedUser) 
  });
  getData(); 
};
</script>

<style></style>
