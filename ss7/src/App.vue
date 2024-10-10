<template>
  <div>
    <h1>props</h1>
    <h1>Slots</h1>
    <h1>Emit</h1>
    <ParentComponent/>
    <ChildrenComponent/>
    <ProductChildren></ProductChildren>
    <ProductParent/>
    <CountParent></CountParent>
    <CountChildren/>
    
  </div>
</template>
<script setup>
import ChildrenComponent from "./components/Bt1/ChildrenComponent.vue";
import ParentComponent from "./components/Bt1/ParentComponent.vue";
import ProductChildren from "./components/Bt2/ProductChildren.vue";
import ProductParent from "./components/Bt2/ProductParent.vue";
import CountChildren from "./components/Bt3/CountChildren.vue";
import CountParent from "./components/Bt3/CountParent.vue";
</script>
