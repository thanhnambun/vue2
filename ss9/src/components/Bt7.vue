<template>
    <div>
        <h1> thêm mới sản phẩm </h1>
        <form action="">
            <label>mã sản phẩm </label>
            <input type="text" v-model="products.id">
            <label>tên sản phẩm </label>
            <input type="text" v-model="products.name">
            <label>giá</label>
            <input type="text" v-model="products.price">
            <label>số lượng</label>
            <input type="number" v-model="products.quantity">
            <button @click="addProduct"> thêm mới </button>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const products = ref({
    id: '',
    name: '',
    price: '',
    quantity: '',
});
const addProduct = (e) => {
    e.preventDefault();

    console.log('Sản phẩm đã thêm:', products.value);
};


</script>
<style lang="">

</style>