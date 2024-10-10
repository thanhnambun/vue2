<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-bold">Quản lý mượn trả sách</h1>

      <select v-model="selectedFilter" @change="filterBooks" class="py-2 px-4 rounded border border-gray-300">
        <option value="">Tất cả</option>
        <option value="Đã trả">Đã trả</option>
        <option value="Chưa trả">Chưa trả</option>
      </select>

      <button @click="toggleAddForm" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Thêm thông tin
      </button>
    </div>

    <table class="min-w-full bg-white border">
      <thead>
        <tr>
          <th class="py-2 border">STT</th>
          <th class="py-2 border">Tên sách</th>
          <th class="py-2 border">Sinh viên mượn</th>
          <th class="py-2 border">Ngày mượn</th>
          <th class="py-2 border">Ngày trả</th>
          <th class="py-2 border">Trạng thái</th>
          <th class="py-2 border">Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in filteredBooks" :key="book.id">
          <td class="py-2 text-center border">{{ index + 1 }}</td>
          <td class="py-2 border text-center">{{ book.title }}</td>
          <td class="py-2 border text-center">{{ book.borrower }}</td>
          <td class="py-2 border text-center">{{ book.borrowDate }}</td>
          <td class="py-2 border text-center">{{ book.returnDate }}</td>
          <td class="py-2 border text-center">
            <select v-model="book.status" @change="saveBooks" class="py-1 px-2 rounded-full border border-gray-300">
              <option value="Đã trả">Đã trả</option>
              <option value="Chưa trả">Chưa trả</option>
            </select>
          </td>
          <td class="py-2 border text-center">
            <button @click="editBook(book)"
              class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded mr-2">Sửa</button>
            <button @click="deleteBook(book.id)"
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="overlay" v-if="showForm">
      <form class="form" @submit.prevent="submitForm">
        <h4 class="text-lg font-bold">{{ editingBook ? 'Chỉnh sửa thông tin sách' : 'Thêm mới sách' }}</h4>

        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Tên sách:</label>
          <input v-model="newBook.title" type="text" class="form-control border rounded p-2 w-full" required />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Tên người mượn:</label>
          <input v-model="newBook.borrower" type="text" class="form-control border rounded p-2 w-full" required />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Ngày mượn:</label>
          <input v-model="newBook.borrowDate" type="date" class="form-control border rounded p-2 w-full" required />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Ngày trả:</label>
          <input v-model="newBook.returnDate" type="date" class="form-control border rounded p-2 w-full" required />
        </div>

        <div>
          <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">{{
            editingBook ? 'Cập nhật' : 'Thêm mới' }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const books = ref([]);
const filteredBooks = ref([]);
const selectedFilter = ref('');
const newBook = ref({
  title: '',
  borrower: '',
  borrowDate: '',
  returnDate: '',
  status: 'Chưa trả',
});
const showForm = ref(false);
let editingBook = ref(null);

onMounted(() => {
  const savedBooks = localStorage.getItem('books');
  if (savedBooks) {
    books.value = JSON.parse(savedBooks);
  }
  filterBooks();
});

const filterBooks = () => {
  filteredBooks.value = selectedFilter.value
    ? books.value.filter((book) => book.status === selectedFilter.value)
    : books.value;
};

const saveBooks = () => {
  localStorage.setItem('books', JSON.stringify(books.value));
  filterBooks();
};

const toggleAddForm = () => {
  showForm.value = !showForm.value;
  editingBook.value = null;
  resetForm();
};

const submitForm = () => {
  if (editingBook.value) {
    const index = books.value.findIndex((book) => book.id === editingBook.value.id);
    books.value.splice(index, 1, { ...newBook.value, id: editingBook.value.id });
  } else {
    books.value.push({ ...newBook.value, id: Date.now() });
  }
  saveBooks();
  toggleAddForm();
};

const editBook = (book) => {
  editingBook.value = book;
  newBook.value = { ...book };
  showForm.value = true;
};

const deleteBook = (id) => {
  books.value = books.value.filter((book) => book.id !== id);
  saveBooks();
};

const resetForm = () => {
  newBook.value = {
    title: '',
    borrower: '',
    borrowDate: '',
    returnDate: '',
    status: 'Chưa trả',
  };
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
