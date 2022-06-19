<script>
export default {
  data() {
    return {
      counter: 0,
      age:18
    }
  },
  methods: {
    // addCounter(num) {
    //   this.counter += num
    // },
    addCounter(number, e) {
      this.counter += number;
      console.log(e);
    },
    addAge(){
      this.age++
    },
    divClick(){
      console.log("父元素的展示");
    },
    btnClick(){
      console.log("子元素的展示");
    },
    submitClick(e){
      // e.preventDefault()
      console.log("提交数据成功");
    },
    onceClick(){
      console.log("只会触发一次");
    },
    KeyUp(){
      console.log("键盘被按下,数据提交成功");
    }
  }
}
</script>

<template>
  <!-- 直接通过js代码处理事件 -->
  <h2 @click="counter++">{{ counter }}</h2>
  <!-- 绑定事件，没有参数 -->
  <h2 @click="addCounter">{{ counter }}</h2>
  <!-- 绑定事件，传递参数 -->
  <h2 @click="addCounter(5)">{{ counter }}</h2>
  <!-- 绑定事件，即传递参数，也需要事件对象 -->
  <h2 @click="addCounter(5, $event)">{{counter}}</h2>
  <!-- 一个事件绑定多个处理函数 -->
  <h2 @click="addCounter(5),addAge()">{{age}}---{{counter}}</h2>


  <!-- 事件修饰符 -->
  <!-- .stop 阻止事件冒泡 -->
  <div @click="divClick">
    <button @click.stop="btnClick">按钮</button>
  </div>
  <!-- .prevent 阻止默认行为 -->
  <form action="">
    <input type="submit" value="提交" @click.prevent="submitClick">
  </form>
  <!-- .once 只出发一次回调  -->
  <button @click.once="onceClick">只触发一次按钮</button>

  <!-- 按键修饰符 -->
  <!-- .{keyCode(键盘的编码) | keyAlias (键盘的简写) }监听键盘的某一个键帽 -->
  <input type="text" @keyup.enter="KeyUp" name="" id="">
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
