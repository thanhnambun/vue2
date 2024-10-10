<!-- <template >
  <div>
    <div>
      <h1>
        ref ,Reactive,computed,watcher
      </h1>
      <p>ref</p>
      <p>giá trị biến count:{{ count }}</p>
      <button @click="increase">click</button>
    </div>
    <Bt1></Bt1>
  </div>
</template>
<script>
import {ref} from "vue"
import Bt1 from "./components/Bt1.vue"
// const userInfo= ref({
//   id:1,
//   name:"nam",
//   address:"nam định"
// })
const user = re
const count=ref([1,2,3,4])
const increase = ()=>{
  count.value = 5
}
const changeInfor = ()=>{
  userInfo.value.address ="Trần phú"
  userInfo.value.name = "Thùy Linh"
}
const userInfo = {
  id: 1,
  name: "Nguyễn Văn A",
  age: 20,
  address: "Hà Nội"
}
</script>
<style lang="">

</style> -->
<template >
  <div>
    <Bt1></Bt1>
    <Bt2></Bt2>
    <Bt3></Bt3>
    <Bt4></Bt4>
    <Bt5></Bt5>
    <Bt6></Bt6>
    <Bt7></Bt7>
    <Bt8></Bt8>
    <Bt9></Bt9>
    <Bt10></Bt10>
  </div>
</template>
<script setup>

import Bt2 from './components/bt2/Bt2.vue';
import Bt3 from './components/bt3/Bt3.vue';
import Bt4 from './components/bt4/Bt4.vue';
import Bt5 from './components/bt5/Bt5.vue';
import Bt6 from './components/bt6/Bt6.vue';
import Bt7 from './components/bt7/Bt7.vue';
import Bt8 from './components/bt8/Bt8.vue';
import Bt9 from './components/bt9/Bt9.vue';
import Bt10 from './components/bt10/Bt10.vue';
import Bt1 from './components/bt1/Bt1.vue';

</script>