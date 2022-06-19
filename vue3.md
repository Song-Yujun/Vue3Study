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


#### props 父传递参数到子组件
> 传递数组或者对象的时候，默认值必须从一个工厂函数获取
> 
> `list:{`
>       `type:Array,`
>       `default(){`
>        `return []`
>     `}`
> `}`

#### 单向数据流
> 所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。

#### 子组件向父组件传递参数
> **子组件**-----> 子组件中自定义触发事件，并且传递参数
> 
> 1.this.$emit("自定义事件的名称","发送的事件参数")
> 
> `this.$emit('injectMsg',this.msg)`
> 
> **父组件**-----> 父组件中定义事件去接受子组件传递过来的事件
> 
> 2.父组件中，通过v-on监听子组件中自定义的事件
> 
> `<Content @injectMsg="getChildMsg" />`

#### 父子组件的访问方式
> 1. 父组件访问子组件 **$refs**  需要在使用子组件的元素上绑定ref，ref="自定义名称"
> 
>       ref:用来给元素或者子组件注册引用信息
> 
> 2. 子组件访问父组件  **$parent**  (不建议使用，因为组件复用性很高)，直接在子组件使用 `this. $parent`
> 3. 子组件访问根组件  **$root**   直接在子组件中使用 `this. $root`

#### 插槽slot
> 如果有多个值，同时放入组件进行替换时，一起作为替换元素

#### 具名插槽
> 1. 添加名字 ： `<slot name="input"></slot>`
> 2. 放入内容 ： `<template v-slot:input><input type="text"></template>`
> 3. v-slot 只能添加在 `<template>` 上
> 
> 注意：**父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。**

#### 作用域插槽
> 作用域插槽，父组件替换插槽的标签，但是数据是由子组件提供
> 
> 包含所有插槽prop的对象命名为：**slotProps**
>
> `<template v-slot:default="slotProps">`
>       <br /> `<ul>`
>        <br />  `<li v-for="item in slotProps.list" :key="item">{{item}}</li>`
>      <br />  `</ul>`
> <br /> `</template>`


#### provide和inject的使用方法
> `provide：{message:"hello"}`----------------------`inject:["message"]`------------数据不响应
>
> `provide(){return {obj:this.obj } }`--------------`inject:["obj"]`---------------数据放在对象里面传递，数据响应（浅拷贝）
> `provide(){return {message:()=>this.message} }`-----`inject:["message"]`---------回调函数的方式传递数据，数据响应

#### 生命周期钩子
> 1. 第一步：`createApp(App).mount("#app")`-----------------实例化一个对象
> 2. 第二步：初始化，制定规则（init）-------------------------数据代理还未开始
> 3. 第三步：beforeCreate-----------------------------------拿不到DOM节点和数据（创建实例之前）
> 4. 第四步：初始化响应式（init）----------------------------数据监测、数据代理就会被执行
> 5. 第五步：created---------------------------------------数据已经被绑定到Vue实例，DOM还未生成，拿不到DOM元素（创建实例之后）
> 6. 第六步：将template模板编译成渲染函数
> 7. 第七步：beforeMount----------------------------------在组件挂载之前，虚拟DOM已生成，拿不到DOM元素，真实DOM还未生成
> 8. 第八步：将虚拟DOM转为真实DOM放到根节点
> 9. 第九步：mounted--------------------------------------模板编译已完成，真实DOM已生成，可操作DOM节点
> 当数据发生改变的时候---------------beforeUpdate：页面还未更新，虚拟DOM已经更新完成
> 
> ---------------------------------updated：组件更新之后
> 
> 10. 第十步：beforeUnmount（vue2：beforeDestroy）----------解绑之前，vue实例解绑之前
> 11. 第十一步：unmounted（vue2：destroyed）----------------实例解绑之后


## 组合式API
> 好处：将同一个逻辑关注点相关代码收集在一起
> 
> setup : 组件被创建之前被执行，在beforeCreate之前执行，代替了beforeCreate和created,不需要使用this，this不会指向实例
> 