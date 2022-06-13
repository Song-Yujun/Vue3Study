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

#### 样式类名class
> 第一种：放置字符串------------>  `<p class="active">hello</p>`
> 
> 第二种：放置对象-------------->  `<p :class="{类名:boolean,类名:boolean}">hello</p>`
> 
> 和普通类同时存在，不会起冲突----> `<p :class="{active:isActive}" class="helloWorld">hello</p>`
> 
> 第三种：数组的方式（不常用）-------------> `<p :class="[message,activeClass]">helloArray</p>`
> 数组和对象结合使用----------------------> `<p :class="[message,{active:isActive}]">hello3</p>`

