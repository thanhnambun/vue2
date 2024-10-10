<template>
    <div>
        <h1> bt2</h1>
        <p>Count: {{ count }}</p>
        <button @click="handleClick">Counter</button>
    </div>
</template>
<script setup>
import { onMounted,ref } from 'vue';
const count = ref("0")
const handleClick=()=>{
    count.value ++;
}
onMounted(() => {
    console.log("dữ liệu đã đc thay đổi ");

})

</script>
