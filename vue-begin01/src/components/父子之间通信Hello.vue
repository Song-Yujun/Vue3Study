<template>
  <h2>Hello</h2>
  <h2>{{message}}</h2>
  <h2>{{aa}}</h2>
  <ul>
    <li v-for="item in list" :key="item">{{item}}</li>
  </ul>
</template>
<script>
  export default{
    // 字符串数组
    // props:["message","aa"]
    // 对象
    props:{
      // 类型的限制
      // message:String,
      // aa:String

      // 设置默认值,必传值
      message:{
        type:String,
        default:"这是默认值",
        required:true
      },
      aa:{
        type:String,
        default:"000",
        required:true
      },
      // 对象或数组默认值必须从一个工厂函数获取
      list:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>