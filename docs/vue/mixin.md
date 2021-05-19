# 关于mixin
## mixin介绍
::: tip mixin
用于将组件中的公共数据和方法抽离出来
:::
## mixin使用 
::: tip 创建mixin/index.js
代码如下
:::
``` js
export default {
  data() {
    return {
      data: "commonData"
    }
  },
  methods: {
    mounted() {
      console.log('mixin')
    },
    log() {
      console.log(this.data + '======')
    }
  }
}
```
::: tip 在组件中使用
代码如下
:::
``` html
 <el-button type="primary" @click="this.log">click</el-button>
```
``` js
import mixin from '../mixin/index.js'
export default {
  mixins:[mixin]
}
```
