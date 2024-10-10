<template>
    <div>
        <h2>Product Information</h2>
        <p>Name: {{ product.name }}</p>
        <p>Price: ${{ product.price }}</p>
        <p>Quantity: {{ product.quantity }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});
</script>
