<template>
    <div>
        <h1> Component Lifecycle</h1>
        <p>{{ countC }}</p>
        <button @click="caculatorC">click</button>
        <p>{{ countD }}</p>
    </div>
</template>
<script setup>
import { computed, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';
const countC = ref('')
const countD = ref('')
onBeforeMount(() => {
    console.log("hook onbeforMount được gọi");
    //nơi gọi APi lấy data dữ liệu gắn vào dom 
})
onMounted(() => {
    console.log("hook onmount được gọi");

})
// update
onBeforeUpdate(() => {
    console.log("onBeforeUpdate dducwoj gọi");

})
onUpdated(() => {
    console.log("onUpdate được gọi");

})
const caculatorC = () => {
    return countC.value ** 2
}
const caculatorD = computed(() => {
    return countC.value ** 2
})
//Unmounting là giai đoạn tháo gỡ khỏi dom
 onBeforeUnmount(()=>{
    console.log("hook được gọi");
    
 })
 onUnmounted(()=>{
    console.log("hookkk đc gọi");
    
 })
</script>
<style></style>