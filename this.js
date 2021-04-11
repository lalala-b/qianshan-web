//  1， 2
// const name = "lalala";

// let obj = {
//   name: "object",
//   getName: function () {
//     return this.name;
//   },
// };

// obj.getName();

// const foo = obj.getName;

// console.info(foo());

// this 这个的意思，这个对象 这个执行上下文
// 1. 方法调用， this指向的当前对象
// 2. 函数调用， this总是指向window
// 3. 构造函数中的this指向的是实例化的对象
// 4. call, apply, bind 改变this的指向 1. call, apply立即执行  call: this, 第二个参数 剩余参数， apply: this, 数组形式的参数
// bind之后是生成一个函数
// 5. 箭头函数  没有自身的this, this是上一层的

// 3，
// function Parent(name) {
//   this.name = name;
// }

// const parent = new Parent('parent');

// 4.
// const a = {
//   name: "a",
// };

// const b = {
//   name: "b",
//   getName: function (arg1, arg2) {
//     // arguments 所有的实参 {0: 'a', 1: 'b', length: 2}
//     console.info(arg1, arg2);
//     return a.name;
//   },
// };

// const foo = b.getName.bind(a, 1);
// foo(2);
// foo(3);
// console.info();

// console.info(b.getName.apply(a, [1, 2]));

//5.
var a = {
  name: "a",
};

const b = {
  name: "b",
  getName: (arg1, arg2) => {
    // arguments 所有的实参 {0: 'a', 1: 'b', length: 2}
    // console.info(arg1, arg2);
    return this.name;
  },
};
