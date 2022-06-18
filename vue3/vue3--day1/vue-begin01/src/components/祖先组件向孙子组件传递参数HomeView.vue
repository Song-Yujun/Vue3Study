<template>
    <Content />
    <button @click="message='你好'">改变message</button>
    <h2>我是HelloView里面的{{message}}</h2>
</template>

<script>
    import Content from './Content.vue'
    export default{
        data(){
            return {
                message:"Hello World",
                obj:{
                    message:"Hello World",
                }
            }
        },
        // provide:{
        //     message:"hello"
        // },
        // provide和inject并不是响应式的
        // 如果想去拿到data里面的数据，provide就必须使用函数，返回一个对象
        // provide(){
        //     return {
        //         message:this.message
        //     }
        // },
        // 通过响应式对象的方式（浅拷贝）
        // provide(){
        //     return {
        //         obj:this.obj
        //     }
        // },

        provide(){
            return {
                message:()=>this.message
            }
        },

        components:{
            Content
        }
    }
</script>