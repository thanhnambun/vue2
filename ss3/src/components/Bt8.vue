<template>
  <div>
    <a href="https://media.istockphoto.com/id/1322277517/vi/anh/c%E1%BB%8F-d%E1%BA%A1i-tr%C3%AAn-n%C3%BAi-l%C3%BAc-ho%C3%A0ng-h%C3%B4n.jpg?s=612x612&w=0&k=20&c=ng_7l3FyBObY5ZJq2BgWCkOKct9Qk6ITFnCC2r55IKQ=" @click.prevent="checkLink">Click vào đây</a>
  </div>
</template>

<script setup>
const checkLink = (event) => {
  const link = event.target.href; 
  

  console.log(link.startsWith("https://"));
  if (!link.startsWith("https://")) {
    
    event.preventDefault();
    alert("Đường dẫn không hợp lệ! Vui lòng sử dụng đường dẫn bắt đầu bằng 'https://'.");
  } else {
    alert("Đường dẫn hợp lệ! Bạn sẽ được chuyển hướng.");
    window.location.href = link;
  }
};
</script>

<style>
</style>
