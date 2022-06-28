<template>
  <div>
    父组件Parent
    <!-- vue-router是基于路由和组件的，路由是用来设定访问路径，将路径和组件映射起来 -->
    <router-link to="/parent/styleone">样式一</router-link>
    <router-link to="/parent/styletwo">样式二</router-link>
    <router-view></router-view>
  </div>
</template>