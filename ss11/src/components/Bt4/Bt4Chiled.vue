<template>
    <div>
        <h2>Bt4 Child</h2>
    </div>
</template>

<script setup>
import { onUpdated } from 'vue';


const props = defineProps(["ages"])

onUpdated(() => {
    console.log("dữ liệ đổi",props.ages);

})

</script>
