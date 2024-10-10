<template>
    <div>
        <RouterView></RouterView>
        <h1>bt5</h1>
        <RouterLink to="/login">lgin</RouterLink>
    </div>
</template>
<script setup>
import { onBeforeRouteLeave, RouterLink, RouterView, useRouter } from 'vue-router';

const a = useRouter()
onBeforeRouteLeave((to, from, next) => {
    console.log("!234");
    
    const company = prompt("nhâp địa chỉ mạng ")
    const password = prompt("nhâp mật khẩu  ")
    if (company === "123" && password === "123") {
        next()
    } else {
        next("/bt4")
    }
})
</script>
<style lang="">

</style>