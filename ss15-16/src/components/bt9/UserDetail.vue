<template>
    <div>
        <h2>Thông tin chi tiết người dùng</h2>
        <p>Tên: {{ user.name }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Tuổi: {{ user.age }}</p>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const userId = route.params.userId;

const user = ref({});

const getUserDetail = async () => {
    const userList = [
        { id: 1, name: "admin", email: "admin@gmao.org", age: "20" },
        { id: 2, name: "admin2", email: "admin@mao.org", age: "21" },
        { id: 3, name: "admin3", email: "admin@gmao.org", age: "22" },
    ];
    user.value = userList.find((user) => user.id == userId);
};

onMounted(() => {
    getUserDetail();
});
</script>
