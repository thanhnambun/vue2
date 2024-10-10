<template>
    <v-row v-for="(userItem, index) in user" :key="index">
        <v-col cols="12" md="4">
            <v-card>
                <v-card-title>{{ userItem.name }}</v-card-title>
                <v-card-subtitle>{{ userItem.email }}</v-card-subtitle>
                <v-card-text>Tuổi: {{ userItem.age }}</v-card-text>
                <v-card-actions>
                    <v-btn @click="goToDetail(userItem)">Xem chi tiết</v-btn>
                </v-card-actions>
            </v-card>
            <div class="text-center text-caption">Dữ liệu của {{ userItem.name }}</div>
        </v-col>
    </v-row>
</template>

<script setup>
const user = [
    { name: "admin", email: "admin@gmao.org", age: "20" },
    { name: "admin2", email: "admin@mao.org", age: "21" },
    { name: "admin3", email: "admin@gmao.org", age: "22" },
];


const goToDetail = (userItem) => {
    console.log(userItem);
    
    // router.push({ name: 'userList/UserDetail', params: { userId: userItem.id } });
};
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
