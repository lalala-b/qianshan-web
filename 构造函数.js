function Parent(name) {
  this.name = name;
  return {
    age: 18,
  };
}

const parent = new Parent();
// 1. 声明一个空对象
// 2. 将对象的原型指向构造函数的原型
// 3. 执行构造函数，并且将this指向刚才的声明的空对象
// 4. 类型检验 构造函数的执行结果， 结果是object直接返回， 不是object就把声明的对象返回。

console.info(parent);

function myNew(fn) {
  var obj = {};
  obj.__proto__ = fn.prototype;
  const result = fn.call(obj);
  return result instanceof Object ? result : obj;
}

const parent1 = myNew(Parent);
console.info(parent1);
