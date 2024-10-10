<template>
    <div>
        <h1>bt3</h1>
        <p v-if="age<3">{{ currentCompanies[0] }}</p>
        <p v-else-if="age < 7">{{ currentCompanies[1] }}</p>
            <p v-else>{{ currentCompanies[2] }}</p>
            <p>age : {{ age }}</p>
            <button @click="handleRandom">random</button>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const age = ref("1" )
const handleRandom = () =>{
    age.value = Math.floor(Math.random()*10)+1
}
const currentCompanies = ref(["Rikkei Academy", "Rikkei Education", "Rikkei Fukuoka"])
</script>
<style>
    
</style>