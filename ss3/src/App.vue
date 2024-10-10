<template>
  <div>
    <p>binding property</p>
    <ul>
      <li>1. v-bind</li>
      <li>2. v-for</li>
      <li>3. v-show</li>
      <li>4. v-if, v-else-if</li>
      <li>5. v-model</li>
    </ul>
    <img v-bind:src="imageUrl" alt="Image2">
    <div v-bind:class="className">nam</div>
    <p v-if="isVueIf">hiển thị nếu điều kiện của v-if đúng </p>
    <p>************</p>
    <p v-show="isVueShow">hiển thị nếu điều kiện của v-show</p>
    <ul>
      <li v-if="age>30">tuổi trung niên</li>
      <li v-else-if="age>18">tuổi thanh niên</li>
      <li v-else-if="age>6">tuổi trưởng thành</li>
      <li v-else>trẻ nhỏ</li>
    </ul>
    <p>*************</p>
    <p>v-model</p>
    <div id="app">
      <input type="text" v-model="inpText">
      <p> giá trị bạn nhập:{{ inpText }} </p>
    </div>
    <button @click="handleClick(mess)">nhấn</button>
    <p>*****************************************</p>
    <Bt1></Bt1>
    <Bt2></Bt2>
    <br>
    <Bt3></Bt3>
    <br>
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
import {ref} from "vue"
import Bt1 from "./components/Bt1.vue"
import Bt2 from "./components/Bt2.vue"
import Bt3 from "./components/Bt3.vue"
import Bt4 from "./components/Bt4.vue"
import Bt5 from "./components/Bt5.vue"
import Bt6 from "./components/Bt6.vue"
import Bt7 from "./components/Bt7.vue"
import Bt8 from "./components/Bt8.vue"
import Bt9 from "./components/Bt9.vue"
import Bt10 from "./components/Bt10.vue"
const imageUrl = 'https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg'
const className = "heading"
const isVueShow =true;
const isVueIf = true;
const age =20
const inpText=ref("hêlo")
const increase=()=>{
  console.log("đã gọi vào hàm");
  count.value=count.value+1;
  
}
const handleClick=(mess)=>{
  console.log("giá trị trả về",mess);
  
}
/*
phân ciệt v-if và v-show
đối với v-if
  + nếu đk đúng thì render ra dom 
  + nếu đk sai thì o render ra dom
đối với v-show thò nếu điều kiện đúng hay ssai thì element vẫn đc render ra dom chier khác điều kiện sai là display:none
ngoài ra đối với v-if thì có thể dùng thêm v-else,v-else-if
*/
</script>

<style>
.heading{
  color: rgb(243, 98, 45);
}
</style>
