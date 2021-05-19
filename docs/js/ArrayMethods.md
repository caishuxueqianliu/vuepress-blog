# 数组方法常用总计
## 改变原数组
::: tip 改变原数组
 改变原数组 且有返回值的 push pop shift unshift sort  reverse splice foreach
 返回值一般 增加类型返回数量 删除类型返回删除值 其他返回自身
:::
``` js
// push pop shift unshift  reverse splice
let arr:string[] = ['a','b','c']
let arr_push:number = arr.push('d')
console.log(arr,'返回值是:'+ arr_push)
// [ 'a', 'b', 'c', 'd' ] 返回值是:4
let arr1:string[] = ['a','b','c']
let arr_push1:string = arr1.pop()
console.log(arr1,'返回值是:'+ arr_push1)
// ["a", "b"] "返回值是:c"
let arr2:string[] = ['a','b','c']
let arr_push2:number= arr2.unshift('d','e')
console.log(arr2,'返回值是:'+ arr_push2)
//  ["d", "a", "b", "c"] 返回值是:4"
let arr3:string[] = ['a','b','c']
let arr_push3:string= arr3.shift()
console.log(arr3,'返回值是:'+ arr_push3)
// ["b", "c"] "返回值是:a"
let arr5:string[] = ['a','b','c']
let arr_7:string[] = arr5.reverse()
console.log(arr5,'返回值是:'+ arr_7)
let arr6:string[] = ['a','b','c']
let arr_8:string[] = arr6.splice(0,2,'e','f')
console.log(arr6,'返回值是:'+ arr_8)
// ["c"] "返回值是:a,b"
let arr7:string[] = ['a','e','c']
let arr_18:string[] = arr7.sort()
console.log(arr7,'返回值是:'+ arr_18)
// ["c"] "返回值是:a,b"
let arr42:Array<Number> = [1,2,3]
let arr_24:boolean = delete arr42[2]
console.log(arr42,'返回值是:'+ arr_24)
// [1, 2, empty] "返回值是:true"
let arr41:Array<Number> = [1,2,3]
let arr_21:any= arr41.forEach((value:any, index:any, array:any) =>{
  array[index] = value *2
})
console.log(arr41,'返回值是:'+ arr_21)
// [2, 4, 6] "返回值是:undefined"
```
###  不改变原数组
::: tip 不改变原数组
   不改变原数组
:::
``` js
// join tostring concat slice indexOf lastIndexOf isArray
console.log('不改变原数组 有返回值的')
let arr4:Array<Number> = [11,2,3]
let arr_4:string = arr4.join('/')
console.log('返回值是:'+ arr_4)
let arr_5:string = arr4.toString()
console.log('返回值是:'+ arr_5)
let arr_6:any= arr4.concat(arr4,arr4)
console.log('返回值是:'+ arr_6)
let arr_9:any = arr4.slice(0,2)
console.log('返回值是:'+ arr_9)
let arr_15:boolean= arr4.includes(1)
console.log('返回值是:'+ arr_15)
let arr_10:number= arr4.indexOf(2,2)
console.log('返回值是:'+ arr_10)
let arr_11:number= arr4.lastIndexOf(2)
console.log('返回值是:'+ arr_11)
let arr_12:any= arr4.valueOf()
console.log('返回值是:'+ arr_12)
// find findIndex 只会返回第一个
let arr_13:any= arr4.find((value:any, index:any, array:any):any =>{
  return value > 1
})
console.log('返回值是:'+ arr_13)
let arr_14:any= arr4.findIndex((value:any, index:any, array:any):any =>{
  return value > 1
})
console.log('返回值是:'+ arr_14)
let arr_16:any= arr4.filter((value:any, index:number, array:any) =>{
  return value > 1
})
console.log('返回值是:'+ arr_16)
let arr_19:boolean= arr4.every((value:any, index:any, array:any) =>{
  return value>2
})
console.log('返回值是:'+ arr_19)
let arr_20:boolean= arr4.some((value:any, index:any, array:any) =>{
  return value>2
})
console.log('返回值是:'+ arr_20)
let arr_17:any= arr4.reduceRight((prev:any, cur:any, index:any, array:any) =>{
    return prev + cur;
},0)
console.log('返回值是:'+ arr_17)
let arr_22:number[]= arr4.map((value:any, index:any, array:any) =>{
  return  value *2
})
console.log('返回值是:'+ arr_22)
```
