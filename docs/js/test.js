// // let a = function () {
// //   return 123
// // }
// // console.log( a instanceof Function )
// //
// // let b = undefined
// // let c = null
// // console.log(c.constructor === null)
// //
// let arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
// console.log([...new Set(arr)])
// console.log(Array.from(new Set(arr)))
// // 双重for
// function f(arr) {
//   for (let i = 0;i < arr.length;i++){
//     for(let j = i + 1;j < arr.length;j++){
//       if(arr[i] == arr[j]){
//         arr.splice(j,1)
//         j--
//       }
//     }
//   }
//   return arr
// }
// console.log(f(arr))
//
// // indexof
// // for (let i = 0;i < arr.length; i++){
// //
// // }
// var arr1=[1,2,3,4,5,6,7,8,2,3,4,2,3,6,2,1,4,3,5,2];
// let num = arr1.reduce((result,cur)=>{
//   result[cur]?result[cur]++:result[cur]=1
//   return result
// },{})
// console.log(num)
// let v = Object.values(num)
// let k = Object.keys(num)
// console.log(k)
// function getIndex(k){
//   let max=k[0]
//   let index=0
//   for(let i =0;i<k.length;i++){
//     if(max<k[i]){
//       index = i
//       max=k[i]
//     }
//   }
//   return index
// }
// console.log(v[getIndex(v)] + '====次数')
// console.log(k[getIndex(v)] + '====数子')
//
// // indexof
// function f1() {
//   let arr1 = []
//   for (let i = 0;i<arr.length;i++){
//     if(arr1.indexOf(arr[i]) == -1){
//       arr1.push(arr[i])
//     }
//   }
//   return arr1
// }
// console.log(f1(arr))
// // inclueds
// function f2() {
//   let arr1 = []
//   for (let i = 0;i<arr.length;i++){
//     if(!arr1.includes(arr[i])){
//       arr1.push(arr[i])
//     }
//   }
//   return arr1
// }
// console.log(f2(arr))
// // sort
//
// function f3(arr) {
//   arr.sort()
//   let arr1=[arr[0]]
//   for (let i = 1;i<arr.length;i++){
//     if(arr[i]!==arr[i-1]){
//       arr1.push(arr[i])
//     }
//   }
// return arr1
// }
// console.log(f3(arr))
// function unique(arr) {
//   var obj = {};
//   return arr.filter(function(item, index, arr){
//     return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
//   })
// }
// console.log(unique(arr))
//
// function unique1(arr) {
//   return arr.filter(function(item, index, arr) {
//     //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
//     return arr.indexOf(item, 0) === index;
//   });
// }
// console.log(unique1(arr))
//
// function unique2(arr){
//   return arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev,cur],[]);
// }
// console.log(unique2(arr))


function f() {
  let a = 1
  return function b() {
    a++
    return a
  }
}
let f2 = f()
console.log(f2())
console.log(f2())
console.log(f2())
console.log(f2())
