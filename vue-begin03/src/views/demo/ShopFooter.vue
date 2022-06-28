<template>
    <div>
        shopFooter
    </div>
</template>


<!--  拿不到路由传递的参数-->
<script>
export default {
    props:["id"],
    mounted(){
        console.log(this.id);
    }
}
</script>