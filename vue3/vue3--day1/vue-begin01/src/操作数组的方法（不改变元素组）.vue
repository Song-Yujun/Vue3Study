<script>
export default {
  data() {
    return {
      list: [1, 3, 6, 4, 5]
    }
  },
  methods: {
    changeArr() {
      // vue3中可以通过索引值修改数组,vue2中无法触发视图的更新
      // this.list[5] = 7
      // push 给数组的末尾添加元素
      // this.list.push(7,8,9)
      // pop  删除数组最末尾的元素
      // this.list.pop()
      // shift 给数组的第一位元素进行删除
      // this.list.shift()
      // unshift 给数组的首位开始添加元素
      // this.list.unshift(0,1,2)
      // splice // 删除元素、插入元素、替换元素
      // 删除元素
      // 第一个元素，表示开始插入或者开始删除的元素的位置的下标
      // 第二个参数，表示传入要删除几个元素（如果没有传，就删除后面所有的元素）
      // this.list.splice(1, 2) // 删除了3,6
      // 插入元素
      // 第二个参数，传入0，并且后面接上需要插入的元素
      // this.list.splice(1,0,123) // 在索引为1的位置插入了123
      // 替换元素
      // 第二个参数，表示替换几个元素，后面的参数表示用于替换前面的元素
      // this.list.splice(1,3,123)   // 替换了3，6，4，被替换成123
      // sort 排序
      // this.list.sort();
      // reverse 翻转
      // this.list.reverse()
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="item in list" :key="item">{{ item }}</li>
  </ul>
  <button @click="changeArr">改变数组</button>
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
