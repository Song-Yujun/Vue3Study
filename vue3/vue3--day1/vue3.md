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

#### 计算属性
> **computed**:对于任何包含响应式数据的复杂逻辑，都应该使用计算属性。  直接使用，不需要使用括号
> 
> 特性：只要依赖值不变，就不会重新计算，**计算属性将基于它们的响应依赖关系缓存**，提高性能。
> 
> `setter和getter`
> 每一个计算属性中都有一个getter和setter
> 
> `set`：计算属性一般是没有set方法，计算属性是只读属性，在设置或者更改计算属性的时候调用

#### 侦听器


