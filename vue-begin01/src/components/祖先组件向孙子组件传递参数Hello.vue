<template>
    <h1>hello,我是hello组件</h1>
    <!-- <h2>我是Hello里面的{{obj.message}}</h2> -->
    <h2>我是Hello里面的{{newMsg}}</h2>
</template>

<script>
export default{
    data(){
        return {

        }
    },
    computed:{
        newMsg(){
            return this.message()
        }
    },
    // 1.provide对象的形式传递，不响应
    // inject:["message"]
    // 2.provide函数返回对象的形式传递，传递一个对象，响应式
    // inject:["obj"]
    // 3.provide函数返回对象的形式传递，传递一个回调函数，响应式
    inject:["message"]
}

</script>