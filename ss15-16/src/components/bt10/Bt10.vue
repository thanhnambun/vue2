<template>
    <div>
        <v-row v-for="(employee, index) in listEmploy" :key="index">
            <v-col cols="12" md="4">
                <v-card>
                    <v-card-title>{{ employee.name }}</v-card-title>
                    <v-card-subtitle>{{ employee.adress }}</v-card-subtitle>
                    <v-card-text>Projects: {{ employee.project.length }}</v-card-text>
                    <v-card-actions>
                        <v-btn @click="goToDetail(employee)">Xem chi tiết</v-btn>
                    </v-card-actions>
                </v-card>
                <div class="text-center text-caption">Dữ liệu của {{ employee.name }}</div>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const listEmploy = [
    {
        id: 1,
        name: 'John Doe',
        adress: 'Hà Nội',
        project: [
            { id: 1, name: 'Project 1' },
            { id: 2, name: 'Project 2' },
        ],
    },
    {
        id: 2,
        name: 'Jane Doe',
        adress: 'Hồ Chí Minh',
        project: [
            { id: 3, name: 'Project 3' },
            { id: 4, name: 'Project 4' },
        ],
    },
    {
        id: 3,
        name: 'David Doe',
        adress: 'Đà Nẵng',
        project: [
            { id: 5, name: 'Project 5' },
            { id: 6, name: 'Project 6' },
        ],
    },
];

const router = useRouter();
const goToDetail = (employee) => {
    router.push(`/bt10/${employee.id}`);
};
</script>

<style scoped>
.text-center {
    margin-top: 10px;
}
</style>
