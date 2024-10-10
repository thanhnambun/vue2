<template>
    <div class="header-nav">
        <RouterView></RouterView>
        <RouterLink to="/bt8" class="nav-link" :class="{ active: isActive('/bt8') }">home</RouterLink>
        <RouterLink to="/bt8/bt7" class="nav-link" :class="{ active: isActive('/bt8/bt7') }">aboutPage</RouterLink>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
const isActive= (path)=>route.path === path
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