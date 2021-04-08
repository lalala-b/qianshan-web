闭包：局部变量的外部使用；
闭包的原理是作用域链；

es6
1. 词法环境 let const 
2. 变量环境 var function
3. this bind  动态的this
4. outer  静态的

es5
1. vo -> ao 
2. this bind
3. scopechain


// event loop

function foo(a) {
  return function () {
    return a;
  }
}

var b = foo();
var c = foo();
b();

// this. 构造函数 原型 继承