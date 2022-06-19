<script>
export default {
  data() {
    return {
      message: "你好",
      age: 0,
      user:{
        name:"张三",
        age:18,
        sex:"男"
      }
    }
  },
  methods: {

  },
  computed: {

  },
  watch: {// 监听数据变化
    // 每当message发生变化的时候，该函数就会被调用
    // message:function(newValue,oldValue){
    //   // 执行异步操作，或者复杂的逻辑代码
    //   console.log(newValue,"新值");
    //   console.log(oldValue,"旧值");
    //   if(newValue.length<5 || newValue.length<10){
    //     console.log("输入框中的内容长度不能小于5或者不能大于10");
    //   }
    // }

    message: {
      immediate: true,// 初始化的时候调用函数
      handler: function (newValue) {
        console.log(newValue);
        if (newValue.length < 5 || newValue.length < 10) {
          console.log("输入框中的内容长度不能小于5或者不能大于10");
        }
      }
    },

    // 监听不到对象的属性变化，需要使用深度监听
    // user:function(newValue){
    //   console.log(newValue);
    // }


    // user:{
    //   handler:function(newValue){
    //     console.log(newValue);
    //   },
    //   deep:true
    // }

     "user.name":{ //使用字符串的形式进行优化，只会单独监听对象中对应的属性
      handler:function(newValue){
        console.log(newValue);
      },
      deep:true
    }

  }
}
</script>

<template>
  <p>{{ message }}</p>
  <button @click="message = 'hello'">改变message</button>

  <!-- v-model:数据的双向绑定 -->
  <input type="text" v-model="message">

  <p>{{user.name}}</p>
  <button @click="user.name='李四'">改变名字</button>
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
