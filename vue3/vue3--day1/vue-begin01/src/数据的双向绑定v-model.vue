<script>
export default {
  data() {
    return {
      counter: 0,
      msg: "helloWorld",
      checked: true,
      fruit: [],
      sex: "男",
      city: "成都",
      cities: []
    }
  },
  methods: {
    changeValue(e) {
      this.msg = e.target.value
    },
    msgKey(){
      console.log(this.msg);
    }
  }
}
</script>

<template>
  <!-- v-model基本使用 -->
  <input type="text" v-model="msg">
  <h2>{{ msg }}</h2>

  <!-- v-model的原理 -->
  <!-- 
    本质上两个操作:
      1. v-bind绑定一个value属性
      2. v-on 给当前元素添加一个input事件
   -->
  <input type="text" :value="msg" @input="changeValue">

  <!-- 复选框 -->
  <!-- 单个复选框,v-model就是一个bool值 -->
  <p>
    <input type="checkbox" v-model="checked" name="" id="">
  </p>
  <h2>{{ checked }}</h2>
  <!-- 多个复选框 -->
  <input type="checkbox" v-model="fruit" value="苹果">苹果
  <input type="checkbox" v-model="fruit" value="李子">李子
  <input type="checkbox" v-model="fruit" value="西瓜">西瓜
  <input type="checkbox" v-model="fruit" value="荔枝">荔枝
  <input type="checkbox" v-model="fruit" value="柠檬">柠檬
  <h2>喜欢的水果:{{ fruit }}</h2>
  <!-- 单选框 -->
  <input type="radio" v-model="sex" value="男">男
  <input type="radio" v-model="sex" value="女">女
  <h2>{{ sex }}</h2>
  <!-- 选项框 -->
  <!-- 单选 -->
  <select v-model="city">
    <option value="成都">成都</option>
    <option value="绵阳">绵阳</option>
    <option value="资阳">资阳</option>
    <option value="达州">达州</option>
  </select>
  <h2>{{ city }}</h2>
  <!-- 多选 -->
  <select v-model="cities" multiple>
    <option value="成都">成都</option>
    <option value="绵阳">绵阳</option>
    <option value="资阳">资阳</option>
    <option value="达州">达州</option>
  </select>
  <h2>{{ cities }}</h2>
  <!-- 修饰符的使用 -->
  <!-- .lazy 当输入框失去焦点,再去同步输入框中的数据 -->
  <input type="text" v-model.lazy="msg">
  <h2>{{ msg }}</h2>
  <!-- .number 将输入框的内容自动转为数字类型 -->
  <input type="text" v-model.number="counter">
  <h2>{{ typeof counter }}</h2>
  <!-- .trim 自动过滤用户输入的首尾空白字符 -->
  <input type="text" v-model.trim="msg" @keydown="msgKey">
  <h2>{{ msg }}</h2>


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
</style>
