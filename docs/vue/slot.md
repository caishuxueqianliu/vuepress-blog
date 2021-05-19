# 关于slot
## 匿名插槽
::: tip 匿名插槽
只有存在一个
:::
::: tip 在子组件中
代码如下
:::
``` html
  <slot></slot>
```
::: tip 在父组件中
代码如下
:::
``` html
     <Nav>
        213
      </Nav>
```
## 具名插槽
::: tip 匿名插槽
可以存在多个(附传值方式)
:::
::: tip 在子组件中
代码如下
:::
``` html
     <slot name="left" :msg="user">
      </slot>
      <slot></slot>
      <slot name="right" :msg="user">
      </slot>
```
::: tip 在父组件中
代码如下
:::
``` html
      <Nav>
         <template v-slot:left="{msg}" > 
         {{msg.name}}
       </template>
         213
         <template slot="right" slot-scope="{msg}"> // 旧版方式 
           {{msg.sex}}
         </template>
       </Nav>
```
