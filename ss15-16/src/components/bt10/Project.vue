<template>
    <div>
        <h2>Project</h2>

        <ul>
            <li v-for="project in employee?.project" :key="project.id">{{ project.name }}</li>
        </ul>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const employees = [
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

const route = useRoute();

const employee = employees.find(emp => emp.id === parseInt(route.params.id));
</script>

<style scoped></style>
