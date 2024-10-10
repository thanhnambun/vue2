<template>
    <v-container>
        <v-card>
            <v-card-title>Item</v-card-title>
            <v-data-table :headers="headers" :items="items" :items-per-page="5" class="elevation-1" hide-default-footer>
                <template #item.status="{ item }">
                    <v-chip :color="getStatusColor(item.status)" dark>
                        {{ item.status }}
                    </v-chip>
                </template>
            </v-data-table>
            <v-pagination v-model="page" :length="Math.ceil(items.length / itemsPerPage)" total-visible="7"
                class="my-3"></v-pagination>
        </v-card>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';

const page = ref(1);
const itemsPerPage = 5;
const headers = [
    { text: 'Name', value: 'name' },
    { text: 'Project Name', value: 'projectName' },
    { text: 'Post', value: 'post' },
    { text: 'Status', value: 'status' },
    { text: 'Budget', value: 'budget' },
];

const items = [
    { name: 'Sunil Joshi', projectName: 'Elite Admin', post: 'Web Designer', status: 'Active', budget: '$3.9k' },
    { name: 'Andrew McDownland', projectName: 'Real Homes WP Theme', post: 'Project Manager', status: 'Pending', budget: '$24.5k' },
    { name: 'Christopher Jamil', projectName: 'MedicalPro WP Theme', post: 'Project Manager', status: 'Completed', budget: '$12.8k' },
    { name: 'Nirav Joshi', projectName: 'Hosting Press HTML', post: 'Frontend Engineer', status: 'Active', budget: '$2.4k' },
    { name: 'Micheal Doe', projectName: 'Helping Hands WP Theme', post: 'Content Writer', status: 'Cancel', budget: '$9.3k' },
];

const getStatusColor = (status) => {
    switch (status) {
        case 'Active':
            return 'green';
        case 'Pending':
            return 'orange';
        case 'Completed':
            return 'blue';
        case 'Cancel':
            return 'red';
        default:
            return 'gray';
    }
};
</script>

<style scoped>
.v-data-table__wrapper {
    overflow-x: auto;
}

.v-pagination {
    justify-content: flex-end;
}
</style>
