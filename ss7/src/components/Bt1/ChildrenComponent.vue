<template >
    <div>
        {{ propsName }}
    </div>
</template>
<script setup>
const props = defineProps({
    propsName:{
        type:String,
        default :"rekii" 
    }
})
</script>
