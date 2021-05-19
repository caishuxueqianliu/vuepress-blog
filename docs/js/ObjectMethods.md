# 对象常用方法总结
## bind,call,apply
::: tip 说明
改变this指向
:::
``` js
let obj = {
  name:'liuhao',
  age:26,
  log:function (sex,address){
      sex = sex ||'nan',
      address = address ||"NJ"
    console.log(sex + '-' + address + '-' + this.name + '-' + this.age)
  }
}
obj.log('男','JS')
let obj1 ={
  name:'haohao',
  age:18
}
obj.log.bind(obj1,'man','YC')()
obj.log.call(obj1,'man','YC')
obj.log.apply(obj1,['man','YC'])
```
## 遍历对象
::: tip 遍历对象  
三种方式
:::
``` js
// Object.values Object.keys 
console.log(Object.values(obj))
console.log(Object.keys(obj))
// for in
let keyArr = []
let valueArr =[]
for (let key in obj){
  console.log(key + '='+ obj[key])
  keyArr.push(key)
  valueArr.push(obj[key])
}
console.log(keyArr)
console.log(valueArr)
// getOwnPropertyNames
let obj2 = Object.getOwnPropertyNames(obj)
console.log(obj2)
let keyArr1 = []
let valueArr1 =[]
let x = Object.getOwnPropertyNames(obj).map(key=>{
  console.log(key,obj[key])
  keyArr1.push(key)
  valueArr1.push(obj[key])
  return key
})
console.log(x)
console.log(keyArr1)
console.log(valueArr1)
```
