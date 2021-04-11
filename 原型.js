1. __proto__   隐性原型 [[Prototype]]  对象才有的属性
2. prototype   显性原型   函数独有的属性 __proto__, constructor
3. constructor 对象才有的属性

__proto__ 当我们去查找一个对象的属性的时候， 当前对象找不到， 会沿着__proto__一直向上查着 直到null为止
prototype 包含了可以有特定类型的所有实例共享的属性和方法

foo.prototype.constructor = foo;