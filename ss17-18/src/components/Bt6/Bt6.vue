<template>
    <div class="header-nav">
        <RouterLink to="/bt6" class="nav-link" :class="{ active: isActive('/bt6') }">DashBorad</RouterLink>
        <RouterLink to="/bt6/user" class="nav-link" :class="{ active: isActive('/bt6/user') }">user</RouterLink>
    </div>
    <RouterView></RouterView>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
const isActive = (path) => route.path === path
</script>
<style scoped>
.header-nav {
    display: flex;
    gap: 20px;
    padding: 10px;
    background-color: #f1f1f1;
}

.nav-link {
    text-decoration: none;
    color: #000;
    font-size: 18px;
}

.nav-link.active {
    font-weight: bold;
    color: #007bff;
}
</style>