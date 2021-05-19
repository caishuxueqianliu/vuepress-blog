# redux简单使用
## index文件配置
``` js
import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducer'
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(
    reducer,
    enhancer
)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
```
## reducer.js配置
``` js
const defaultSate = {
    list: []
}
export default (state = defaultSate,action)=>{
    if(action.type==='getList'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }


    return state
}
```
## actionCreator.js
``` js
import { reqGetCookie, reqPostLogin, reqGetList, reqPostRecord, reqGetResponse} from '../api/iosaudit'

export const getListType = (data) => ({
    type: 'getList',
    data
})

// 获取包列表
export const actionGetList = () => {
    return async (dispatch) => {
        const { data } = await reqGetList()
        const type = data instanceof Array
        if(!type) {
            await dispatch(actionLogin())
            const { data } = await reqGetList()
                const action = getListType(data)
                dispatch(action)
        } else {
            const action = getListType(data)
            dispatch(action)
        }
    }
}

```
## 使用
``` js
   async componentDidMount() {
       store.subscribe(()=>{
           this.setState(store.getState())
       })
       await this.getList()
       await this.handleList()
    },
   getList = async () =>{
        const action = actionGetList()
        await store.dispatch(action)
    }
// store.getState().list
```
