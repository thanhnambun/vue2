<template>
    <div>
        <h1>Profile</h1>
        <input type="text" v-model="keySearch" placeholder="Search products..." />
        <button @click="handleSearch">Tìm kiếm</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter();

const keySearch = ref("");

const handleSearch = () => {
    router.push({
        name: 'listProduct',
        query: { ProductName: keySearch.value } 
    });
};
console.log(route.query.ProductName);

</script>

<style scoped>
</style>
