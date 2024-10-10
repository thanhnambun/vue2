<template >
  <div>
    11111
    <!-- 
      react 
      1.khởi tạo :khởi tạ state và props
      2.mount: đưa vào dom
      3. update: quá trình thay đổi state
      4. unmount: loại bỏ khỏi dom 
    -->
    <!-- 
        vue 
        1.Khởi Tạo (Creation): Tạo và thiết lập đối tượng component
        2.Gắn Kết (Mounting): Gắn kết component vào DOM và hiển thị nó
        3.Cập Nhật (Updating): Cập nhật component khi dữ liệu hoặc props thay đổi
        4.Hủy (Unmounting): Gỡ bỏ component và dọn dẹp tài nguyênF
      -->
        <!-- <Lifecycle v-if="isShow"></Lifecycle>
        <button @click="unmountComponent">click unMount</button> -->
        <Bt1/>
        <Bt2/>
        <Bt3/>
        <Bt4Parent/>
        <Bt5Parent/>
        <Bt6/>
        <Bt7></Bt7>
        <Bt8/>
        <Bt9/>
        <Bt10/>
  </div>
</template>
<script setup>
import Bt1 from './components/Bt1.vue';
import Bt2 from './components/Bt2.vue';
import Bt3 from './components/Bt3.vue';
import Bt6 from './components/Bt6.vue';
import Bt4Parent from './components/Bt4/Bt4Parent.vue';
import Bt5Parent from './components/Bt5/Bt5Parent.vue';
import Bt7 from './components/Bt7.vue';
import Bt8 from './components/Bt8.vue';
import Bt9 from './components/Bt9.vue';
import Bt10 from './components/Bt10.vue';

// import Lifecycle from'./components/Lifecycle.vue'
// const unmountComponent =()=>{
//   isShow.value=!isShow.value
// }
</script>
<style >
  
</style>