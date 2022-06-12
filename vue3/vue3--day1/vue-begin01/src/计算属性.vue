<script>
export default {
  data() {
    return {
      message:"helloWorld",
      age:0
    }
  },
  methods: {
   reverseMessage(){
     console.log("方法methods");
     return this.message.split("").reverse().join("")
   }
  },
  // 只要依赖值不变，就不会重新计算，计算属性将基于它们的响应依赖关系缓存，提高性能。
  computed:{
    /** 
     * 简写
    */
    // reverseMsg(){
    //   console.log("计算属性computed");
    //   return this.message.split("").reverse().join("")
    // }
    /** 
     * 完整写法
    */
    reverseMsg:{
      get:function(){
        return this.message.split("").reverse().join("")
      },
      set:function(newValue){
        this.message = newValue
        console.log(newValue);
      }
    }
  }
}
</script>

<template>
  <p>{{message}}</p>
  <!-- 第一种：js表达式，总共会计算三次 -->
  <p>{{message.split("").reverse().join("")}}</p>
  <p>{{message.split("").reverse().join("")}}</p>
  <p>{{message.split("").reverse().join("")}}</p>
  <!-- 第二种：计算属性的方式 -->
  <p>{{reverseMsg}}</p>
  <p>{{reverseMsg}}</p>
  <p>{{reverseMsg}}</p>
  <!-- 第三种：使用methods中的方法 -->
  <p>{{reverseMessage()}}</p>
  <p>{{reverseMessage()}}</p>
  <p>{{reverseMessage()}}</p>

  <!-- 改变message的值 -->
  <button @click="message='你好'">改变message</button>
  <!-- 调用reverseMsg计算属性中的setter方法 -->
  <button @click="reverseMsg='你好'">改变reverseMsg</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#d1 {
  color: red;
}

.d1 {
  font-size: 50px;
}

#d2 {
  color: blue;
}
</style>
