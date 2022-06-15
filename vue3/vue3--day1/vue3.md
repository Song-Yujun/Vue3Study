### Vue3

#### 指令
> **v-once**：通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。
> 
> `<span v-once>这个将不会改变: {{ msg }}</span>`
> 
> **v-html**: 双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用v-html 指令
> 
> `<span v-html="rawHtml"></span></p>`

#### 属性
> **v-bind**:绑定属性的内容
> 
> `<p v-bind:id="id">v-bind绑定</p>`
> 
> `<img v-bind:src="url" alt="" />`
> 
> 动态属性:
> 
> `<p v-bind:[attributeName]="id">v-bind绑定动态属性</p>`
> 
> 动态事件:
> 
> `<p @[mouseEvent]="attributeName='class'">动态鼠标事件</p>`
> 
> `<button @click="mouseEvent = 'mouseover'">动态改变事件</button>`
  
#### 监听事件
> **v-on**: 用于监听DOM事件,@是v-on的语法糖
> ` <button v-on:click="changeColor">改变颜色</button>`

### methods
> 避免使用箭头函数
> 
> ` 在定义 methods 时应避免使用箭头函数，因为这会阻止 Vue 绑定恰当的 this 指向。`

#### 计算属性**computed**
> 对于任何包含响应式数据的复杂逻辑，都应该使用计算属性。  直接使用，不需要使用括号
> 
> 特性：只要依赖值不变，就不会重新计算，**计算属性将基于它们的响应依赖关系缓存**，提高性能。
> 
> `setter和getter`
> 每一个计算属性中都有一个getter和setter
> 
> `set`：计算属性一般是没有set方法，计算属性是只读属性，在设置或者更改计算属性的时候调用

#### 侦听器**watch**
> 监听数据的变化，一个数据会影响多个数据（一旦依赖值发生改变的话，函数就会被调用）
> 
> 作用：执行异步操作，或者复杂的逻辑代码
> 
> 监听不到对象的属性变化，需要使用深度监听

#### 深度监听
> immediate: true 表示初始化的时候调用函数
> 
> handler：function(){}  对值的操作
> 
> deep:true  表示对复杂数据类型的深度监听，会一层一层的向下遍历，给每一个属性加上侦听器
> 
> 使用对象的形式进行优化，只会单独监听对象中对应的属性

#### class类名样式
> 第一种：放置字符串------------>  `<p class="active">hello</p>`
> 
> 第二种：放置对象-------------->  `<p :class="{类名:boolean,类名:boolean}">hello</p>`
> 
> 和普通类同时存在，不会起冲突----> `<p :class="{active:isActive}" class="helloWorld">hello</p>`
> 
> 第三种：数组的方式（不常用）-------------> `<p :class="[message,activeClass]">helloArray</p>`
> 
> 数组和对象结合使用----------------------> `<p :class="[message,{active:isActive}]">hello3</p>`

#### style内联样式
> 第一种放置字符串 ---------------> `<p style="color:red">hello</p>`
> 
> 第二种放置对象------------------> `<p :style="{key(css属性名):value(属性值，来自于data中的属性)}">hello</p>`
> 
> CSS property 名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名
> 
> 数组的方式----------------------> `<p :style="[styleObj,{border:'5px solid blue'}]">hello</p>`

#### 条件语句
> v-if
> 
> v-else-if
> 
> v-else
> 
> 在 `<template>` 元素上使用 v-if 条件渲染分组此时可以把一个 `<template>` 元素当做不可见的包裹元素，并在上面使用 v-if。最终的渲染结果将不包含 `<template>`元素
> 
> v-show : 简单切换元素的display CSS property

#### v-if和v-show的区别
> 不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS property display。
> 
> `注意，v-show 不支持 <template> 元素，也不支持 v-else。`
> 
> v-if:只要后面为false，对应的元素以及子元素都不会被渲染，控制dom元素的创建和销毁
> 
> 频繁切换状态的时候使用 **v-show**
> 
> 运行条件很少改变的时候使用  **v-if**


#### data为什么是一个函数
> 组件之间互不影响,不会造成数据的污染
