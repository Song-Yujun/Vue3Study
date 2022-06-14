<script>
export default {
  data() {
    return {
      message: "helloWorld",
      isActive: true,
      error:10,
      classObj: {
        active: true,
        helloWorld: true
      },
      activeClass:"active"
    }
  },
  computed:{
    classObjCom:function(){
      return {
        active:this.isActive && !this.error,
        helloWorld:this.error
      }
    }
  }
}
</script>

<template>
  <!-- 第一种：放置字符串 -->
  <p class="active">hello</p>
  <!-- 第二种：放置对象 -->
  <!-- <p :class="{类名:boolean}">hello</p> -->
  <p :class="{ active: isActive }">hello</p>
  <p :class="{ active: isActive, helloWorld: isActive }">hello</p>
  <button @click="isActive = !isActive">改变active展示</button>
  <!-- 和普通类同时存在，不会起冲突 -->
  <p :class="{ active: isActive }" class="helloWorld">hello</p>
  <p :class="classObj">hello</p>
  <!-- 使用computed -->
  <p :class="classObjCom">hellocomputed</p>

  <!-- 第三种：数组语法（不常用） -->
  <p :class="[message,activeClass]">helloArray</p>
  <!-- 数组和对象结合使用 -->
  <p :class="[message,{active:isActive}]">hello3</p>
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

.active {
  font-size: 50px;
  color: green;
}

.helloWorld {
  background-color: pink;
}
</style>
