<template>
  <div>
    <button @click="goPage">跳转页面</button>
  </div>
</template>

<script>
export default {
    methods:{
        goPage(){
            // 基本使用
            // this.$router.push("/")
            // 通过传入对象
            // this.$router.push({
            //     path:"/"
            // })
            // 带参数
            // this.$router.push({
            //     path:"/user/123"
            // })
            // 通过name，params传递参数，跳转路由
            // this.$router.push({
            //     name:"news",
            //     params:{
            //         id:123456
            //     }
            // })
            // 带问号
            // this.$router.push({
            //     path:"/about",
            //     query:{
            //         name:"张三"
            //     }
            // })
            // 替换当前位置
            // this.$router.push({
            //     path:"/about",
            //     query:{
            //         name:"张三"
            //     },
            //     replace:true
            // })
            this.$router.replace({
                path:"/about",
                query:{
                    name:"张三"
                }
            })
        }
    }
}
</script>