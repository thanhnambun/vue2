<template>
    <form v-if="isAddFormVisible" @submit.prevent="validateAndAddProduct" class="form-container">
        <h2>{{ isEditing ? "Chỉnh sửa sản phẩm" : "Thêm mới sản phẩm" }}</h2>

        <div class="form-group">
            <label for="name">Tên sản phẩm:</label>
            <input type="text" id="name" v-model="newProduct.name" required />
            <p v-if="errors.name" class="error">{{ errors.name }}</p>
        </div>

        <div class="form-group">
            <label for="img">Hình ảnh (URL):</label>
            <input type="text" id="img" v-model="newProduct.img" required />
            <p v-if="errors.img" class="error">{{ errors.img }}</p>
        </div>

        <div class="form-group">
            <label for="price">Giá:</label>
            <input type="number" id="price" v-model="newProduct.price" required />
            <p v-if="errors.price" class="error">{{ errors.price }}</p>
        </div>

        <div class="form-group">
            <label for="quantity">Số lượng (kg):</label>
            <input type="number" id="quantity" v-model="newProduct.quantity" required />
            <p v-if="errors.quantity" class="error">{{ errors.quantity }}</p>
        </div>

        <div class="form-group">
            <label for="day">Ngày thêm:</label>
            <input type="date" id="day" v-model="newProduct.day" required />
            <p v-if="errors.day" class="error">{{ errors.day }}</p>
        </div>

        <div class="button-group">
            <button type="button" @click="toggleForm" class="cancel-button">Hủy</button>
            <button type="submit" class="submit-button">Lưu</button>
        </div>
    </form>

    <table class="product-table">
        <thead>
            <tr>
                <th>#</th>
                <th>Tên sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Giá</th>
                <th>Số lượng (kg)</th>
                <th>Ngày thêm</th>
                <th>Hành động</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td><img :src="product.img" alt="product.name" /></td>
                <td>{{ product.price }}</td>
                <td>{{ product.quantity }}</td>
                <td>{{ product.day }}</td>
                <td>
                    <button class="edit-button" @click="openEditForm(product)">Sửa</button>
                    <button class="delete-button" @click="deleteProduct(product.id)">Xóa</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';

const products = ref([]);
const isEditing = ref(false); 
const isAddFormVisible = ref(false); 
const currentProductId = ref(null); 

let newProduct = reactive({
    name: '',
    img: '',
    price: '',
    quantity: '',
    day: ''
});

const errors = reactive({
    name: '',
    img: '',
    price: '',
    quantity: '',
    day: ''
});

const getData = async () => {
    try {
        const response = await fetch('http://localhost:3000/product');
        const jsonData = await response.json();
        products.value = jsonData;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};

const deleteProduct = async (id) => {
    try {
        await fetch(`http://localhost:3000/product/${id}`, { method: 'DELETE' });
        getData();
    } catch (error) {
        console.error("Error deleting product:", error);
    }
};

const openEditForm = (product) => {
    newProduct.name = product.name;
    newProduct.img = product.img;
    newProduct.price = product.price;
    newProduct.quantity = product.quantity;
    newProduct.day = product.day;

    currentProductId.value = product.id; 
    isEditing.value = true; 
    isAddFormVisible.value = true; 
};

const toggleForm = () => {
    isAddFormVisible.value = !isAddFormVisible.value;
    resetForm();
};

const resetForm = () => {
    newProduct.name = '';
    newProduct.img = '';
    newProduct.price = '';
    newProduct.quantity = '';
    newProduct.day = '';
    currentProductId.value = null;
    isEditing.value = false;
    Object.keys(errors).forEach(key => {
        errors[key] = '';
    });
};

const validateProduct = () => {
    let isValid = true;

    if (!newProduct.name) {
        errors.name = 'Tên sản phẩm không được để trống';
        isValid = false;
    }

    if (!newProduct.img) {
        errors.img = 'Hình ảnh không được để trống';
        isValid = false;
    }

    if (!newProduct.price || newProduct.price <= 0) {
        errors.price = 'Giá phải lớn hơn 0';
        isValid = false;
    }

    if (!newProduct.quantity || newProduct.quantity <= 0) {
        errors.quantity = 'Số lượng phải lớn hơn 0';
        isValid = false;
    }

    if (!newProduct.day) {
        errors.day = 'Ngày thêm không được để trống';
        isValid = false;
    }

    return isValid;
};

const validateAndAddProduct = async () => {
    if (validateProduct()) {
        if (isEditing.value) {
            await updateProduct(currentProductId.value); 
        } else {
            await addProduct(); 
        }
        toggleForm();
        resetForm();
    }
};

const addProduct = async () => {
    try {
        await fetch('http://localhost:3000/product', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct)
        });
        getData();
    } catch (error) {
        console.error("Error adding product:", error);
    }
};

const updateProduct = async (id) => {
    try {
        await fetch(`http://localhost:3000/product/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        });
        getData();
    } catch (error) {
        console.error("Error updating product:", error);
    }
};

onMounted(() => {
    getData();
});
// sắp xếp 
const sortNumber = 
</script>
<style scoped>
.product-container {
    width: 80%;
    margin: 20px auto;
}

.add-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    cursor: pointer;
}

.add-button:hover {
    background-color: #0056b3;
}

.product-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

.product-table th,
.product-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.product-table th {
    background-color: #f2f2f2;
    font-weight: bold;
}

.product-table img {
    width: 50px;
    height: 50px;
    object-fit: cover;
}

.edit-button,
.delete-button {
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
}

.edit-button {
    background-color: #ffc107;
    color: white;
}

.delete-button {
    background-color: #dc3545;
    color: white;
}

.form-container {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ddd;
}

.error {
    color: red;
    font-size: 12px;
}

.button-group {
    display: flex;
    justify-content: space-between;
}

.cancel-button,
.submit-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.cancel-button {
    background-color: #6c757d;
}

.cancel-button:hover,
.submit-button:hover {
    background-color: #0056b3;
}
</style>

