<template>
    <div>
        <form @submit.prevent="submitForm">
            <div>
                <label>Tên sinh viên</label>
                <input type="text" v-model="formData.name" ref="nameInput" />
                <span v-if="errors.name" class="error">{{ errors.name }}</span>
            </div>

            <div>
                <label>Email</label>
                <input type="email" v-model="formData.email" />
                <span v-if="errors.email" class="error">{{ errors.email }}</span>
            </div>

            <div>
                <label>Mật khẩu</label>
                <input type="password" v-model="formData.password" />
                <span v-if="errors.password" class="error">{{ errors.password }}</span>
            </div>

            <div>
                <label>Địa chỉ</label>
                <input type="text" v-model="formData.address" />
            </div>

            <button type="submit">Đăng ký</button>
        </form>

        <p v-if="successMessage" class="success">{{ successMessage }}</p>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const formData = ref({
    name: '',
    email: '',
    password: '',
    phone: '',
});

const errors = ref({
    name: null,
    email: null,
    password: null
});
const isEmailDuplicate = (email) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === email);
};
const successMessage = ref('');
const submitForm = () => {
    errors.value = { name: null, email: null, password: null };
    successMessage.value = '';

    if (!formData.value.name) {
        errors.value.name = 'Tên sinh viên không được để trống';
    }

    if (!formData.value.email) {
        errors.value.email = 'Email không được để trống';
    } else if (isEmailDuplicate(formData.value.email)) {
        errors.value.email = 'Email đã tồn tại';
    }

    if (!formData.value.password) {
        errors.value.password = 'Mật khẩu không được để trống';
    }

    if (!errors.value.name && !errors.value.email && !errors.value.password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ ...formData.value });
        localStorage.setItem('users', JSON.stringify(users));

        successMessage.value = 'Đăng ký tài khoản thành công';

        formData.value = { name: '', email: '', password: '', address: '' };

        nameInput.value.focus();
    }
}


</script>
<style scoped>
.error {
    color: red;
    font-size: 0.9em;
}

.success {
    color: green;
    font-size: 1em;
    margin-top: 20px;
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