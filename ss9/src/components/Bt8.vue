<template>
    <div>
        <h1> thêm mới tài khoản </h1>
        <form action="">
            <label>Họ và tên </label>
            <input type="text" v-model="user.fullName">
            <label>Email </label>
            <input type="text" v-model="user.name">
            <label>Mật khẩu</label>
            <input type="text" v-model="user.password">
            <label>Nhập lại mật khẩu</label>
            <input type="number" v-model="user.repassword">
            <button @click="addProduct"> đăng kí </button>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const user = ref({
    fullName: '',
    name: '',
    password: '',
    repassword: '',
});
const addProduct = (e) => {
    e.preventDefault();
    console.log('user đã thêm:', user.value);
};


</script>
<style lang="">

</style>