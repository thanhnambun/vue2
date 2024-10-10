<template>
    <div class="register-form">
        <h2>Registration Form</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="studentName">Student Name</label>
                <input type="text" id="studentName" v-model="studentName" placeholder="Enter your name" />
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" placeholder="Enter your email" />
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" placeholder="Enter your password" />
            </div>

            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" id="address" v-model="address" placeholder="Enter your address" />
            </div>

            <button type="submit">Register</button>
        </form>
    </div>
</template>
<script setup>

</script>
<style></style>