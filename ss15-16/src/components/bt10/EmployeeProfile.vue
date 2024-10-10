<!-- src/views/EmployeeDetail.vue -->
<template>
    <div>
        <h2>Employee Details - ID: {{ $route.params.id }}</h2>
        <nav>
            <router-link :to="`/bt10/${$route.params.id}/profile`">Profile</router-link> |
            <router-link :to="`/bt10/${$route.params.id}/projects`">Projects</router-link> |
            <router-link :to="`/bt10/${$route.params.id}/contact`">Contact</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>

</script>

<style scoped>
nav {
    margin-bottom: 20px;
}
</style>
