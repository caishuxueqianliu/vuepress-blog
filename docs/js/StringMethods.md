# 字符串常用方法总结
### 字符串转换
::: tip 字符串转换
  toString String “”
:::
``` js
let str = 12312
console.log(str, str.toString(),String(str),"" + str)
```
###  split replace concat
::: tip split replace concat
  split replace concat
:::
``` js
let str1 = '12312'
console.log(str1.split('',2))     // 字符串分割成数组 
console.log(str1.replace(/2/g,'')) // 字符串替换
console.log(str1.concat(str1,str1)) // 字符串拼接
```
###  indexOf lastIndexOf charAt charCodeAt
::: tip  indexOf lastIndexOf charAt charCodeAt
 indexOf lastIndexOf charAt charCodeAt
:::
``` js
console.log(str1.lastIndexOf('2')) // 返回字符串的索引
console.log(str1.charCodeAt(2))   // 返回字符串的Unicode 编码:
```
### 截取
::: tip slice substring substr
slice substring substr
:::
``` js
console.log(str1.slice(1,2))   // 截取字符串索引1至2
console.log(str1.substring(1,2))  // 截取字符串索引1至2 
console.log(str1.substr(1,2))   // 截取字符串索引1开始 长度2
// 前两种第二个参数是结束位置 第三种是长度
```
### 查找
::: tip match exec search
查找
:::
``` js
console.log(str1.match(/1/g)) // 返回数组 值为查找的字符串
let a = /1/
console.log(a.exec(str1))  // 返回所查字符串的第一个索引
console.log(str1.search(/1/)) // 返回所查字符串的第一个索引
```
