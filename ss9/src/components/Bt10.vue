<template>
    <div>
        <h1>đăng nhập </h1>
        <form @submit.prevent="submitForm">
            <div>
                <label>Email</label>
                <input type="text" v-model="users.email">
                <span v-if="errors.email" class="error">{{ errors.email }}</span>
            </div>

            <div>
                <label>mật khẩu</label>
                <input type="text" v-model="users.password">
                <span v-if="errors.password" class="error">{{ errors.password }}</span>
            </div>
            <button type="submit">Đăng nhập</button>
        </form>
        <p v-if="successMessage" class="success">{{ successMessage }}</p>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const users = ref({
    email: "",
    password: ""
})
const errors = ref({
    email: null,
    password: null
});

const isEmailDuplicate = (email) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === email);
};
const isPasswordDuplicate = (password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(users => users.password === password);
};
const successMessage = ref('');
const submitForm = () => {
    errors.value = { email: null, password: null };
    successMessage.value = '';

    if (!users.value.email) {
        errors.value.email = 'Email không được để trống';
    } else if (isEmailDuplicate(!users.value.email)) {
        errors.value.email = 'Email không tồn tại';
    }

    if (!users.value.password) {
        errors.value.password = 'Mật khẩu không được để trống';
    } else if (isPasswordDuplicate(!users.value.password)) {
        errors.value.email = 'mật khẩu không tồn tại';
    }

    if (!errors.value.email && !errors.value.password) {
        successMessage.value = 'Đăng nhập tài khoản thành công';

        users.value = { email: '', password: '', };

    }
}
</script>
<style scoped>
.error {
    color: red;
    font-size: 0.9em;
}

.message {
    margin-top: 20px;
    font-size: 1em;
}

label {
    font-weight: bold;
    display: block;
    margin: 8px 0;
}

input {
    padding: 6px;
    margin-bottom: 12px;
    width: 100%;
    max-width: 300px;
}

button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
</style>