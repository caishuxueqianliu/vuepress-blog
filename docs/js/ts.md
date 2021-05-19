# TypeScript入门
## 基本数据类型
``` ts
// boolean
var a:boolean = false
console.log(a)
// string
var b:string = 'string'
console.log(b)
// number
var c:number = 123
console.log(c)
// array
var d:Array<string> = ['a','b']
var e:number[] = [2,4]
console.log(d,e)
// tuple 元组 数组的一种
let arr:[string,number,boolean] = ['222',333,false]
console.log(arr)
// enum 枚举类型
enum Flag {success = 1, error = -1}
let f:Flag =Flag.success
console.log(f)
// any 任意类型
let any:any = 'str'
any = 123
console.log(any)
// null undefined 即never类型
let g:number | null | undefined
console.log(g)
// void 没有任何类型
let f1:void = (()=>{
  console.log('123')
})()
// 有返回值的
let f2:string = (function (){
 return 'ss'
})()
console.log(f2)
// never 类型
var f3:never = (()=>{
  throw new Error('err')
})()
```
## 函数
``` ts

// 函数
// es5
// 声明式
function f4() {
     console.log('声明式')
}
f4()
// 匿名函数
let f5 = function () {
  console.log('匿名函数')
}()

// ts
function f6(name:string,age:number):void {
    console.log(name,age)
}
f6('liuhao',18)

let f7:string = ((name:string,age:number) =>{
  return `${name} ==== ${age}`
})('liuhao',25)
console.log(f7)

// 方法可选参数 必须配置在后面
function f8(name:string,age?:number):void {
  if(age){
    console.log(age)
  } else {
    console.log('age保密')
  }
}
f8('liuhao')
// 默认参数
function f9(name:string,age=22):void {
  console.log(name,age)
}
f9('liuhao')
// 剩余参数 三点运算符
function sum(a:number,...result:Array<number>):number {
  let num = a
  for (let i=0;i<result.length;i++){
    num +=result[i]
  }
    return num
}
console.log(sum(1,3,5,7))

// 函数重载
function f10(name:string):string
function f10(name:string,age:number):string
function f10(name:any,age?:any):any {
  if(age){
    return age
  } else {
    return name
  }
}
console.log(f10('zhangsan',22))
```
## es5 类 继承
``` ts
function Person(name,age) {
  this.name = name
  this.age = age
  this.run = function() {
        console.log(this.name + this.age + '====run')
  }
}
Person.prototype.work = function () {
  console.log(this.name + this.age + '====work')
}
function son(name,age) {
  Person.call(this,name,age) // 对象冒充
}
son.prototype = Person.prototype //  new Person()
let s = new son('liuhao',17)
s.run()
s.work()

```
## class
``` ts
// class
class person {
  public name
  public age
  constructor(name,age) {
    this.name= name
    this.age = age
  }
  run(){
    console.log(this.name + this.age + '====run')
  }
}
person.prototype.work=function() {
  console.log(this.name + this.age + '====work')
}
// let pp = new person('www',22)
// pp.work()
// pp.run()
class Son  extends person{
  constructor(name,age) {
    super(name,age)
    this.name= name
    this.age = age
  }
}
let ss = new Son('xxx',22)
ss.work()
ss.run()
```
## ts class
``` ts
class personTs {
  public  name:string
  public  age:number
  constructor(name:string,age:number) {
    this.name= name
    this.age = age
  }
  run():void{
    console.log(this.name + this.age + '====run')
  }
}
let ppTs = new personTs('ts',2222)
console.log(ppTs.name)
// ppTs.work()
// ppTs.run()
class sonTs extends personTs {
  constructor(name:string,age:number){
    super(name,age)
  }
  work1(){
    console.log(this.name + this.age + '====work1')
  }
}
let sTS = new sonTs('ts',111)
sTS.run()
sTS.work1()
// public 公共
// protected 保护
// private 私有


// 静态方法和静态属性
class sta {
  static sex:string = '男'
  static print():void{
    console.log(this.sex)
  }
}
sta.print()
```
## 多态
::: tip 说明
多态 父类定义一个方法 不去实现 让子类去实现不同的方法
:::
``` ts
class annimal {
  protected name:string
  constructor(name:string) {
    this.name = name
  }
  eat():void{
    console.log('animal')
  }
}
class dog extends annimal{
  constructor(name:string) {
    super(name)
  }
  eat():void{
    console.log(this.name)
  }
}
class cat extends annimal{
  constructor(name:string) {
    super(name)
  }
  eat():void{
    console.log(this.name)
  }
}
let dogTs = new dog('dog')
let catTs = new cat('cat')
dogTs.eat()
catTs.eat()
```
##  抽象类 抽象方法  
::: tip 说明
1.抽象类不可实例化 2.是一种标准 抽象方法 子类必须实现
:::
``` ts
abstract class annima1 {
  abstract eat():any;
  run(){
    console.log('其他方法可以不实现')
  }
}
class cat1 extends annima1{
  eat(): void {
    console.log('catcatctact')
  }
}
let cc1 =new cat1()
cc1.eat()
```
## 接口
::: tip 说明
接口 属性接口 一直对对象的规范
::: 
``` ts
function test(name:string,age:number):void {
  console.log(name,age)
}
test('liuhao',18)

interface full {
  name:string
  age?:number
}
function test1(name:full):void {
  console.log(name.name,name.age)
}
var obj = {
  name:'llls'
}
test1(obj)
```
## 封装ajax
``` ts
interface Config {
  type:string,
  url: string,
  data: any,
  dataType:string

}
function ajax(config:Config){
  var xhr = new XMLHttpRequest()
  xhr.open(config.type,config.url,true)
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  //xhr.send(JSON.stringify(config.data))
  xhr.send(config.data)
  xhr.onreadystatechange=function () {
    if(xhr.readyState ===4 && xhr.status ===200){
      console.log('ok')
      if(config.dataType === 'json'){
        console.log(JSON.parse(xhr.responseText))
      } else {
        console.log(xhr.responseText
        )
      }
    }
  }
}
ajax({
  type:'post',
  url:'http://127.0.0.1:8081/userLogin',
  // data: {uname:'xuegao',upasswd:'xuegao'},
  data:'uname=xuegao&upasswd=xuegao',
  dataType:'json'
})
```
##  函数类型接口
::: tip 说明
函数类型接口 及对返回值约束
::: 
``` ts
interface encrypt {
  (key:string, value:string):string
}
let md5:encrypt = function (key:string,value:string):string {
  return key+value
}
console.log(md5('test','encrypt'))

// 可索引接口 对数组 对象约束
interface arr {
  [index:number]:string
}
let arr1:arr = ['22','44']
console.log(arr)
interface obj {
  [index:string]:string
}
let obj1:obj = {name:'liuhao',age:'12'}
console.log(obj1)
```
##  类接口
::: tip 说明
 类接口 类似抽象类 是一个标准
::: 
``` ts
interface an1 {
  name:string
  eat(str:string):void
}
class dog1 implements an1{
  public name:string
  constructor(name:string) {
    this.name = name
  }
  eat(str: string): void {
    console.log(this.name + str)
  }
}
let dd1 = new dog1('dog')
dd1.eat('ddd1')
```
## 接口继承
``` ts
interface c1 {
  name:string
  work(str:string):void
}
interface c2 extends c1 {
  sleep(str:string):void
}
class web implements c2{
  public name:string
  constructor(name:string) {
    this.name =name
  }
  work(str: string): void {
    console.log(str+this.name)
  }
  sleep(str: string): void {
    console.log(str+this.name)
  }
}
let w1 = new web('web')
w1.sleep('sleep')
class liuhao extends web implements c2{
  constructor(name:string) {
    super(name);
  }
}
let l =new liuhao('liuhao')
l.work('work')
```
## 泛型
``` ts
// 泛型
function getdata<T>(value:T):void {
    console.log(value)
}
getdata<number>(123)
getdata<string>('abc')
```
## 类的泛型
``` ts
// 类的泛型
class minClass<T> {
  public list:T[]=[]
  add(value:T):void{
    this.list.push(value)
  }
  min():T{
    let minnum:T = this.list[0]
    for(let i=0;i<this.list.length;i++){
      if(this.list[i]<minnum){
        minnum = this.list[i]
      }
    }
    return minnum
  }
}
let xx = new minClass<number>()
xx.add(2)
xx.add(23)
xx.add(1)
console.log(xx.min())
let yy = new minClass<string>()
yy.add('gg')
yy.add('c')
yy.add('e')
console.log(yy.min())
```
## 泛型接口
``` ts
// 泛型接口
interface fx1 {
  <T>(value:T):T
}
let fx111:fx1 = function<T>(value:T):T {
   return value
}
console.log(fx111<string>('fx11'))

interface fx2<T> {
    (value:T):T
}
let fx222:fx2<number> = function<T>(value:T):T {
  return value
}
console.log(fx222(222))
```
## 操作数据库的泛型类
``` ts
// 操作数据库的泛型类
class mysqlDb<T>{
  add(info:T):boolean{
    console.log(info)
    return true
  }
}
class User{
  username:string | undefined
  password:string | undefined
  constructor(username:string,password:string) {
    this.username = username
    this.password = password
  }
}
var u = new User('liuhao','123456');
var db = new mysqlDb()
db.add(u)
```