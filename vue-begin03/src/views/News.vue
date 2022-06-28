<template>
  <div>新闻</div>
</template>
<script>
export default {
  data() {
    return {
      age: 18,
    };
  },
  beforeRouteEnter(to, from, next) {  // 拿不到实例对象
    console.log(to);
    console.log(from);
    // console.log(this.age);   // 无法读取this

    // 通过next回调函数拿去实例对象里面的值
    next((vm)=>{
        console.log(vm.age);
    })
    console.log("路由组件进入之前");
  },
  beforeRouteUpdate(to, from) {
    console.log("路由更新组件进入之前");
  },
  beforeRouteLeave(to, from) {
    console.log("路由离开组件之前");
  },
};
</script>