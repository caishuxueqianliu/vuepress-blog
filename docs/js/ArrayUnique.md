# 数组去重的常见方法
## 最完美的去重
::: tip 完美去重
利用hasOwnProperty 判断是否存在对象属性
:::
``` js
function unique(arr) {
    var obj = {};
    return arr.filter(function(item, index, arr){
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}
    var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
        console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}]   //所有的都去重了
```
## 最简洁的new Set
::: warning 缺点
无法去掉“{}”空对象
:::
``` js
let arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log([...new Set(arr)]) 
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
console.log(Array.from(new Set(arr))) 
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
```
## 最原始 双重for + splice
::: warning 缺点
NaN和{}没有去重，两个null直接消失了
:::
``` js
function unique(arr){            
        for(var i=0; i<arr.length; i++){
            for(var j=i+1; j<arr.length; j++){
                if(arr[i]==arr[j]){         //第一个等同于第二个，splice方法删除第二个
                    arr.splice(j,1);
                    j--;
                }
            }
        }
return arr;
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
    console.log(unique(arr))
    //[1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {…}, {…}]     //NaN和{}没有去重，两个null直接消失了
```
## 单层for+indexOf
::: warning 缺点
NaN、{}没有去重
:::
``` js
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array .indexOf(arr[i]) === -1) {
            array .push(arr[i])
        }
    }
    return array;
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
   // [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {…}, {…}]  //NaN、{}没有去重
```
## 单层for+includes
::: warning 缺点
{}没有去重
:::
``` js
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array =[];
    for(var i = 0; i < arr.length; i++) {
            if( !array.includes( arr[i]) ) {//includes 检测数组是否有某个值
                    array.push(arr[i]);
              }
    }
    return array
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
    console.log(unique(arr))
    //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]     //{}没有去重
```
## 利用sort后 前后元素比对
::: warning 缺点
 NaN、{}没有去重
:::
``` js
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return;
    }
    arr = arr.sort()
    var arrry= [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            arrry.push(arr[i]);
        }
    }
    return arrry;
}
     var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
        console.log(unique(arr))
// [0, 1, 15, "NaN", NaN, NaN, {…}, {…}, "a", false, null, true, "true", undefined]      //NaN、{}没有去重
```
## 利用filter
::: warning 缺点
 {}没有去重
:::
``` js
function unique(arr) {
  return arr.filter(function(item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 0) === index;
  });
}
    var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
        console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, "NaN", 0, "a", {…}, {…}]
```
## 补充 数组查出现最多的数字
```` js
var arr1=[1,2,3,4,5,6,7,8,2,3,4,2,3,6,2,1,4,3,5,2];
let num = arr1.reduce((result,cur)=>{
  result[cur]?result[cur]++:result[cur]=1
  return result
},{})
console.log(num)
let v = Object.values(num)
let k = Object.keys(num)
console.log(k)
function getIndex(k){
  let max=k[0]
  let index=0
  for(let i =0;i<k.length;i++){
    if(max<k[i]){
      index = i
      max=k[i]
    }
  }
  return index
}
console.log(v[getIndex(v)] + '====次数')
console.log(k[getIndex(v)] + '====数子')
```
