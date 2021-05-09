// 1. let const 变量和常量的声明；与var不同，不存在变量提升， 并且是有块级作用域。
// 2. 解构赋值
// 数组
// const arr = [1, 2, 3];

// let arr1 = arr[0] || 2;
// let arr2 = arr[1];
// let arr3 = arr[2];

// let [arr1, arr2, arr3] = arr;

// let a = 1;
// let b = 2;
// let [a, b] = [b, a];

// 对象
// 按照键来解构
// const data = {
//   res: 1,
//   code: 2,
//   aaaaaaaaaa: 2,
//   b: { username: "qianshan" },
// };

// let {
//   aaaaaaaaaa = '',
//   res,
//   b: { username },
// } = data;

// if (aaaaaaaaaa === 2) {
//   // todo
// }

// if (res === 1) {
// }

// console.info(b, a);

// 3. 数组新增的方法
// find findIndex forEach map

const a = [1, 2, 3];
// [2, 4, 6];

// const res = a.findIndex(function (item, index) {
//   return item > 1;
// });

// console.info(res);

// for (let i = 0; i < arr.length; i++) {

// }

// const b = a;
// a.forEach(function (item, index) {
//   b[index] = b * 2;
// });

// console.info(
//   a.map(function (item, index) {
//     return item * 3;
//   }),
//   a
// );

// 4. 箭头函数
// () => { }
// function() {}
// 没有自身的this
// 没有arguments
// 没有原型

// 如果参数只有一个 括号可以省略
// 如果函数内没有任何语句，只有一个返回值  大括号可以变为（） return不写;

// item => {
//   console.info(item)
// }

// a.map(item => (item * 2))

// 5. 模版字符串
const dom = `<div><span>id:</span>${1 + 2 + "11"}</div>`;
console.info(dom);

// 6. 对象的扩展
function f(x, y) {
  // return { x, y };
  return { x: x, y: y };
}

// method() {
//     return "Hello!";
// }
// ==>
// method: function() {
//   return "Hello!";
// }

// Object.assign();
var target = { a: 1 };
var source1 = { b: 2 };
var source2 = { a: 3 };

Object.assign(target, source1, source2);
// console.info(target);

// 属性的遍历
// for ... in

// for (let key in target) {
//   console.info(key);
// }

// Object.keys 返回的是属性的数组
// console.info(Object.keys(target));
// Object.values 返回的是值的数组
// Object.entries(target) 返回的是键值对的数组；
// console.info(Object.entries(target));

// 7. 扩展运算符号 ...
// const arr = [1, 2, 3];
// console.info(...arr);

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// console.info({ ...obj });

// 8. symbol
// string number null undefined boolean symbol bigInt
// object
// symbol;

// let s = Symbol("sssss");
// let as = Symbol("s");
// console.info(as == s);
// console.info(s.description);

// 9. map 映射 允许对象做为键 不允许重复
// set 不允许重复
// weakmap 弱映射 weakset 弱集合

// let map = new Map();
// map.set({a: 1}, 1);
// map.get("a");
// map.size;

// let set = new Set();

// const arr1 = [1, 1, 1, 2, 3, 3, 4, 4];
// console.info(new Set(arr1))

// weakmap 键只能是对象
// weakset 值只能是对象
