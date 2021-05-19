# 数据类型及判断方式
## 数据类型
> 基本数据类型（栈）：undefinded，null，boolean，Nubmer，String ,Symbol、BigInt   
> 引用数据类型（堆）：Object，Array，Function
## 判断方式
### typeOf
::: tip typeOf  
判断某个数据的类型
:::
``` js
let a = 'str'
console.log(typeof(a)) // string
```
::: warning 注意  
null，Array，Object都会检测为对象  
:::
``` js
let a = null
let b = [1,2,3]
let c = { name:'liuhao' }
console.log(typeof(a)) // object
console.log(typeof(b)) // object
console.log(typeof(c)) // object
```
### instanceof
::: tip instanceof  
其内部运行机制是判断在其原型链中能否找到该类型的原型
:::
``` js
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true
```
::: warning 注意  
只可判断引用数据类型  
:::
``` js
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false 
console.log('str' instanceof String);                // false 
```
### constructor
::: tip constructor  
一是判断数据类型,二是对象实例访问`construtor`对象访问它的构造函数
:::
``` js
console.log((2).constructor === Number); // true
console.log((true).constructor === Boolean); // true
console.log(('str').constructor === String); // true
console.log(([]).constructor === Array); // true
console.log((function() {}).constructor === Function); // true
console.log(({}).constructor === Object); // true
```
::: warning 注意  
不可判断undefined和null
:::
### Object.prototype.toString.call()
::: tip Object.prototype.toString.call()  
使用object对象的原型方法`tostring`来判断数据类型
:::
``` js
let a = Object.prototype.toString;
console.log(a.call(2)); // [object Number]
console.log(a.call(2).slice(8,-1)); // Number
console.log(a.call(true)); //  [object Boolean]
console.log(a.call('str')); // [object String]
console.log(a.call([])); // [object Array]
console.log(a.call(function(){})); // [object Function]
console.log(a.call({})); // [object Object]
console.log(a.call(undefined)); // [object Undefined]
console.log(a.call(null)); // [object Null]
```
