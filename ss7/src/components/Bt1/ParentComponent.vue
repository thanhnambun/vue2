<template >
    <div>
        1111111111
        <ChildrenComponent :propsName="parentData"/>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import ChildrenComponent from './ChildrenComponent.vue';
const parentData= ref("rikkei")
</script>
