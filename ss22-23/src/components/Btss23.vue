<template>
    <button class="add-button" @click="toggleForm">Thêm mới sản phẩm</button>
    <button @click="handleChange"> Sắp xếp</button>

    <div class="search-container">
        <input type="text" v-model="searchQuery" placeholder="Tìm kiếm theo tên sinh viên..." />
    </div>

    <form v-if="isAddFormVisible" @submit.prevent="validateAndAddStudent" class="form-container">
        <h2>{{ isEditing ? "Chỉnh sửa sinh viên" : "Thêm mới sinh viên" }}</h2>

        <div class="form-group">
            <label for="name">Tên sinh viên:</label>
            <input type="text" id="name" v-model="newStudent.name" required />
            <p v-if="errors.name" class="error">{{ errors.name }}</p>
        </div>

        <div class="form-group">
            <label for="address">Địa chỉ:</label>
            <input type="text" id="address" v-model="newStudent.address" required />
            <p v-if="errors.address" class="error">{{ errors.address }}</p>
        </div>

        <div class="form-group">
            <label for="phone">Số điện thoại:</label>
            <input type="text" id="phone" v-model="newStudent.phone" required />
            <p v-if="errors.phone" class="error">{{ errors.phone }}</p>
        </div>

        <div class="button-group">
            <button type="button" @click="toggleForm" class="cancel-button">Hủy</button>
            <button type="submit" class="submit-button">Lưu</button>
        </div>
    </form>

    <table class="student-table">
        <thead>
            <tr>
                <th>#</th>
                <th>Tên sinh viên</th>
                <th>Địa chỉ</th>
                <th>Số điện thoại</th>
                <th>Hành động</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="student in filteredStudents" :key="student.id">
                <td>{{ student.id }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.address }}</td>
                <td>{{ student.phone }}</td>
                <td>
                    <button class="edit-button" @click="openEditForm(student)">Sửa</button>
                    <button class="delete-button" @click="deleteStudent(student.id)">Xóa</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
import axios from 'axios';

const students = ref([]);
const isEditing = ref(false);
const isAddFormVisible = ref(false);
const currentStudentId = ref(null);
const searchQuery = ref(''); 

let newStudent = reactive({
    name: '',
    address: '',
    phone: ''
});

const errors = reactive({
    name: '',
    address: '',
    phone: ''
});

const getData = async () => {
    try {
        const response = await axios.get("http://localhost:3000/student");
        students.value = response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:3000/student/${id}`);
    getData();
}

const openEditForm = (student) => {
    newStudent.name = student.name;
    newStudent.address = student.address;
    newStudent.phone = student.phone;

    currentStudentId.value = student.id;
    isEditing.value = true;
    isAddFormVisible.value = true;
};

const toggleForm = () => {
    isAddFormVisible.value = !isAddFormVisible.value;
    resetForm();
};

const resetForm = () => {
    newStudent.name = '';
    newStudent.address = '';
    newStudent.phone = '';
    currentStudentId.value = null;
    isEditing.value = false;
    Object.keys(errors).forEach(key => errors[key] = '');
};

const validateStudent = () => {
    let isValid = true;

    if (!newStudent.name) {
        errors.name = 'Tên sinh viên không được để trống';
        isValid = false;
    }

    if (!newStudent.address) {
        errors.address = 'Địa chỉ không được để trống';
        isValid = false;
    }

    if (!newStudent.phone) {
        errors.phone = 'Số điện thoại không được để trống';
        isValid = false;
    }

    return isValid;
};

const validateAndAddStudent = async () => {
    if (validateStudent()) {
        if (isEditing.value) {
            await updateStudent(currentStudentId.value);
        } else {
            await addStudent();
        }
        toggleForm();
        resetForm();
    }
};

const addStudent = async () => {
    await axios.post("http://localhost:3000/student", newStudent);
    await getData();
};

const updateStudent = async (id) => {
    await axios.put(`http://localhost:3000/student/${id}`, newStudent);
    await getData();
};

const filteredStudents = computed(() => {
    return students.value.filter(student =>
        student.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

onMounted(() => {
    getData();
});

</script>

<style scoped>
.student-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

.student-table th,
.student-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.student-table th {
    background-color: #f2f2f2;
    font-weight: bold;
}

.edit-button,
.delete-button {
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    margin-right: 5px;
}

.add-button,
.cancel-button,
.submit-button {
    margin: 5px;
    padding: 10px 15px;
    cursor: pointer;
}

.search-container {
    margin-bottom: 20px;
}

.error {
    color: red;
    font-size: 0.8em;
}
</style>
