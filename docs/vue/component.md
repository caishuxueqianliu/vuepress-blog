# 组件通信
## 父向子传值
::: tip 说明
父组件代码
:::
``` html
<template>
    <test :msg="msg"/>
</template>
```
``` js
import test from "./components/test";
export default{
	data() {
            return {
              msg:"我是父组件的值"
            }
        }
}
```
::: tip 说明
子组件代码
:::
``` html
<template>
<div id="test">
         子组件收到的值==={{msg}}
    </div>
</template>
```
``` js
export default{
	props: {
          msg: {
            type: String,
            require: true
          }
}
```
## 子向父传值
::: tip 说明
父组件代码
:::
``` html
<template>
<test :msg="msg" @msg="this.msg1=$event"></test> // @msg="transmit"
     父组件收到的值==={{msg1}}
</template>
```
``` js
import test from "./components/test";
export default{
	 data() {
            return {
              msg:"我是父组件的值",
              mgs1:''
            }
        },
     methods:{
     	    transmit (msg) {
            	this.msg1= msg
          }
      }
}
```
::: tip 说明
子组件代码
:::
``` js
export default{
	data() {
            return {
              msg1: "我是子组件的值"
        }},
    mounted() {
          this.$emit('msg',this.msg1)
        }
```