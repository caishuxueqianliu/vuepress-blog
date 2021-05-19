# vuex状态管理
## 基本属性
::: tip 属性
state 存放状态  
mutations state成员操作  
getters 加工state成员给外界  
actions 异步操作  
modules 模块化状态管理  
:::
### state
::: tip state
state 不用说，存放数据
:::
``` js
// 定义
state: {  
    token: window.localStorage.getItem('token'), //token
  },
// 组件中使用方式两种
this.$store.state.token
  import { mapState } from 'vuex'
computed: {
    ...mapState({
        token: state => state.token,
    })
}
// ...mapState({a:'token'}) 其他三种同理 改名
```
### mutations
::: tip mutations
mutations是操作state数据的方法的集合，比如对该数据的修改、增加、删除等等。
:::
``` js
  mutations: {   
   editToken (state, token) { //设置参数
      state.token = token;
    } 
  },
// 组件中去调用执行这个方法

this.$store.commit('editToken',token) // 方法，参数
或者写全

this.$store.commit({
    type:'edit', // mutations 中的方法名
    payload:{     // 参数
        age:15,
        sex:'男'
    }
})
// 或者mapMutations方式

import { mapMutations } from 'vuex'
   methods: {
      ...mapMutations(['editToken']) //其他地方调用即可
    }
```
::: warnning 注意
注意的是，对于增删state中的成员，为了配合Vue的响应式数据，我们在Mutations的方法中，应当使用Vue提供的方法来进行操作。
:::
``` js
Vue.set(state,"age",15)   //增
Vue.delete(state,'age')   //删
```
### getters
::: tip gettets
Getters可以对state中的成员加工后传递给外界
Getters中的方法有两个默认参数
相当于全局computed属性
state 当前VueX对象中的状态对象
getters 当前getters对象，用于将getters下的其他getter拿来用
:::
``` js
getters:{
    nameInfo(state){
        return "姓名:"+state.name
    },
    fullInfo(state, getters){
        return getters.nameInfo+'年龄:'+state.age
    }  
}
// 组件中调用两种

this.$store.getters.fullInfo
import { mapGetters } from 'vuex'
computed: {
    ...mapGetters(['fullInfo']),
  }
```
### actions
::: tip actions
由于直接在Mutations方法中进行异步操作，将会引起数据失效。所以提供了Actions来专门进行异步操作，最终提交Mutations方法。
Actions中的方法有两个默认参数
context 上下文(相当于箭头函数中的this)对象
payload 挂载参数
:::
``` js
actions:{
    aEdit(context, token){
        setTimeout(()=>{
            context.commit('edit',token)
        },2000)
    }
}
// 或者
  actions:{  
recordBaName({commit}, baName) {
      commit('updataBaName', baName)
    },
  async getAddress({commit,state}){
   const geohash=state.latitude+','+state.longitude
   const result=await reqAddress(geohash)
 const address=result.data.data
 commit('receive_address',{address})
   }
}
// 组件中调用两种方式
this.$store.dispatch('aEdit',{token:'test'})
    import { mapActions} from "vuex";
    methods: {
        ...mapActions(['aEdit'])  
// 相当于this.aEdit({token:'test'})映射为
// this.$store.dispatch('aEdit',{token:'test'})
    }
```
### modules 
::: tip modules
当项目庞大，状态非常多时，可以采用模块化管理模式。Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state，mutations,getters,actions、甚至是嵌套子模块——从上至下进行同样方式的分割。
:::
``` js
models:{
    a:{
        state:{},
        getters:{},
        ....
    }
}
this.$store.state.a //是models中的a 而不是根state中的a 前者覆盖后者
this.$store.commit('editKey')
this.$store.dispatch('aEditKey')
//组件中提交会自动执行所有模块内的对应type的方法
模块中mutations和getters中的方法接受的第一个参数是自身局部模块内部的state

modules:{
    a:{
        state:{key:5},
        mutations:{
            editKey(state){
                state.key = 9
            }
        },
        ....
    }
}
getters中方法的第三个参数是根节点状态

modules:{
    a:{
        state:{key:5},
        getters:{
            getKeyCount(state,getter,rootState){
                return  rootState.key + state.key
            }
        },
        ....
    }
}
// actions中方法获取局部模块状态是context.state,根节点状态是context.rootState

modules:{
    a:{
        state:{key:5},
        actions:{
            aEidtKey(context){
                if(context.state.key === context.rootState.key){
                    context.commit('editKey')
                }
            }
        },
        ....
    }
}
```
::: warning 注意
moudles 使用
:::
``` js
// 定义时
const account = {
  namespaced: true,
  state: {},
  mutations: {},
  getters: {},
  actions: {
    recordToken({commit,dispatch}){
        }
    }
}
// 调用
...mapActions('account', ['recordToken'])
```
