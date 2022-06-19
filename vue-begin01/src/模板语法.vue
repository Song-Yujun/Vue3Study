<script>
// 声明式渲染，可以提高开发效率

export default {
  data() {
    return {
      num: 0,
      uname: "张三",
      msg: "<h1>标题</h1>",
      id: "d1",
      url: "https://scpic.chinaz.net/files/pic/pic7/xpic365.jpg",
      attributeName: "id",
      mouseEvent: "click"
    }
  },
  methods: {
    // 给vue定义方法
    changeUname: function () {
      // this指向vue实例
      this.uname = "李四"
    },
    changeColor: function () {
      this.id = "d2"
    },
    testFun:()=>{
      console.log(this);//undefined
    }
  }
}
</script>

<template>
  <!-- 组件实例的所有 property，无论如何定义，都可以在组件的模板中访问 -->
  <p>{{ num }}</p>
  <p>{{ uname }}</p>
  <!-- v-once:当数据改变时，插值处的内容不会更新 -->
  <p v-once>{{ uname }}</p>
  <button @click="changeUname">改变名字</button>
  <!-- v-html:双大括号会将数据解释为普通文本，而非 HTML 代码 -->
  <p v-html="msg"></p>
  <!-- v-bind:动态的绑定属性的内容 -->
  <button @click="changeColor">改变颜色</button>
  <p v-bind:id="id">v-bind绑定</p>
  <img v-bind:src="url" alt="">
  <!-- 使用JavaScript表达式 -->
  <p>{{ num + 1 }}</p>
  <p>{{ uname.split("").reverse().join("") }}</p>
  <p v-bind:id="id + 1">v-bind绑定</p>
  <!-- v-on: 用于监听DOM事件,@是v-on的语法糖 -->
  <button v-on:click="changeColor">改变颜色</button>
  <!-- 动态参数 -->
  <!-- 动态属性 -->
  <p v-bind:[attributeName]="id">v-bind绑定动态属性</p>
  <button @click="attributeName = 'class'">动态改变属性</button>
  <!-- 动态事件 -->
  <p @[mouseEvent]="attributeName = 'class'">动态鼠标事件</p>
  <button @click="mouseEvent = 'mouseover'">动态改变事件</button>

  <button @click="testFun">避免使用箭头函数</button>
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
