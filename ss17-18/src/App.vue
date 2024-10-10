<template>
  <div>
    <h1> bài tập

    </h1>
    <!-- <h1>app Page</h1>
    <RouterView v-slot="{ component }">
      <Suspense>
        <template #default>
          <component :is="component" />
        </template>
<template #fallback>
          <div>loading...</div>
        </template>

</Suspense>
</RouterView>
<ProfilePage />
<DashBorad></DashBorad> -->
    <RouterView></RouterView>
    <!-- <Bt3></Bt3>
    <button @click="clickBt5"> Bt5</button> -->
    <!-- <Bt6/> -->
  </div>
</template>
<script setup>
import Bt3 from './components/Bt3.vue';
import { useRouter } from 'vue-router';
import Bt6 from './components/Bt6/Bt6.vue';

const a = useRouter()

const clickBt5 = () => {
  a.push("/bt5")

}


// import DashBorad from "./views/DashBorad.vue";
// import ProfilePage from "./views/ProfilePage.vue";
</script>
<style></style>