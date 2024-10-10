<template>
  <div class="container">
    <h3>Quản lý Nhân viên</h3>

    <div class="actions">
      <button @click="showAddForm" class="btn btn-primary">Thêm nhân viên</button>
      <input v-model="searchQuery" type="text" placeholder="Tìm kiếm theo email" />
      <button @click="refreshData" class="btn btn-secondary">Làm mới</button>
    </div>

    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th>STT</th>
          <th>Họ và tên</th>
          <th>Ngày sinh</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Trạng thái</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in paginatedEmployees" :key="index">
          <td>{{ (currentPage - 1) * recordsPerPage + index + 1 }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.dob }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.address }}</td>
          <td>{{ employee.active ? 'Đang hoạt động' : 'Ngừng hoạt động' }}</td>
          <td>
            <button @click="toggleBlock(employee)" class="btn" :class="employee.active ? 'btn-warning' : 'btn-success'">
              {{ employee.active ? 'Chặn' : 'Bỏ chặn' }}
            </button>
            <button @click="showEditForm(employee)" class="btn btn-info">Sửa</button>
            <button @click="confirmDelete(employee)" class="btn btn-danger">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Trang trước</button>
      <span>Trang {{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Trang sau</button>
    </div>

    <div v-if="isAddFormVisible" class="modal">
      <div class="modal-content">
        <h3>{{ isEditing ? 'Chỉnh sửa' : 'Thêm mới' }} nhân viên</h3>
        <form @submit.prevent="addEmployee">
          <div>
            <label>Họ và tên</label>
            <input v-model="newEmployee.name" type="text" />
            <span v-if="nameError" class="error">Tên không được để trống</span>
          </div>
          <div>
            <label>Ngày sinh</label>
            <input v-model="newEmployee.dob" type="date" />
          </div>
          <div>
            <label>Email</label>
            <input v-model="newEmployee.email" type="email" />
            <span v-if="emailError" class="error">Email không hợp lệ</span>
          </div>
          <div>
            <label>Địa chỉ</label>
            <textarea v-model="newEmployee.address"></textarea>
          </div>
          <div>
            <button type="submit" class="btn btn-primary">Lưu</button>
            <button type="button" @click="closeForm" class="btn btn-secondary">Hủy</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2';
import { ref, computed, onMounted } from 'vue';

const isAddFormVisible = ref(false);
const searchQuery = ref('');
const newEmployee = ref({ name: '', dob: '', email: '', address: '' });
const employees = ref([]);
const recordsPerPage = ref(10);
const currentPage = ref(1);
const nameError = ref(false);
const emailError = ref(false);
const employeeToEdit = ref(null);
const isEditing = ref(false);

const loadEmployeesFromLocalStorage = () => {
  const storedEmployees = JSON.parse(localStorage.getItem('users')) || [];
  employees.value = storedEmployees;
};

const saveEmployeesToLocalStorage = () => {
  localStorage.setItem('users', JSON.stringify(employees.value));
};

onMounted(() => {
  loadEmployeesFromLocalStorage();
});

const showAddForm = () => {
  isAddFormVisible.value = true;
  resetForm();
};

const closeForm = () => {
  isAddFormVisible.value = false;
  resetForm();
};

const resetForm = () => {
  newEmployee.value = { name: '', dob: '', email: '', address: '' };
  nameError.value = false;
  emailError.value = false;
};

const validateForm = () => {
  if (!newEmployee.value.name.trim()) {
    nameError.value = true;
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!newEmployee.value.email.trim() || !emailPattern.test(newEmployee.value.email)) {
    emailError.value = true;
    return false;
  }

  const currentDate = new Date();
  const dobDate = new Date(newEmployee.value.dob);
  if (dobDate > currentDate) {
    Swal.fire('Lỗi', 'Ngày sinh không được lớn hơn ngày hiện tại!', 'error');
    return false;
  }

  return true;
};

const addEmployee = () => {
  if (!validateForm()) return;

  if (isEditing.value) {
    Object.assign(employeeToEdit.value, newEmployee.value);
    isEditing.value = false;
  } else {
    employees.value.push({ ...newEmployee.value, active: true });
  }

  saveEmployeesToLocalStorage();
  closeForm();
};

const toggleBlock = (employee) => {
  const action = employee.active ? 'chặn' : 'bỏ chặn';
  Swal.fire({
    title: `Bạn có chắc chắn muốn ${action} tài khoản này?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: `Xác nhận ${action}`,
    cancelButtonText: 'Hủy',
  }).then((result) => {
    if (result.isConfirmed) {
      employee.active = !employee.active;
      saveEmployeesToLocalStorage();
      Swal.fire('Thành công', `Tài khoản đã được ${action}`, 'success');
    }
  });
};

const confirmDelete = (employee) => {
  Swal.fire({
    title: 'Bạn có chắc chắn muốn xóa tài khoản này?',
    text: 'Hành động này không thể hoàn tác!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Xác nhận xóa',
    cancelButtonText: 'Hủy',
  }).then((result) => {
    if (result.isConfirmed) {
      employees.value = employees.value.filter(e => e.email !== employee.email);
      saveEmployeesToLocalStorage();
      Swal.fire('Đã xóa!', 'Tài khoản đã được xóa.', 'success');
    }
  });
};

const refreshData = () => {
  searchQuery.value = "";
};

const filteredEmployees = computed(() => {
  return employees.value.filter(employee => employee.email.includes(searchQuery.value));
});

const paginatedEmployees = computed(() => {
  const start = (currentPage.value - 1) * recordsPerPage.value;
  const end = start + recordsPerPage.value;
  return filteredEmployees.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredEmployees.value.length / recordsPerPage.value);
});

const goToPage = (page) => {
  currentPage.value = page;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const showEditForm = (employee) => {
  isAddFormVisible.value = true;
  newEmployee.value = { ...employee };
  isEditing.value = true;
  employeeToEdit.value = employee;
};
</script>

<style>
</style>
