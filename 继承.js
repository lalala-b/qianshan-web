// 1. 构造函数继承
// function Parent(name) {
//   this.name = name;
// }

// Parent.prototype.getName = function () {
//   return this.name;
// };

// function Child(name) {
//   Parent.call(this, name);
//   this.type = "child";
// }

// const child = new Child('parent');
// 缺点：无法访问父类原型上的属性和方法

// 2. 原型链继承
// function Parent() {
//   this.message = {
//     name: "parent",
//     age: 18,
//   };
// }

// Parent.prototype.getMessage = function () {
//   return this.message;
// };

// function Child() {
//   this.type = "child";
// }

// const parent = new Parent();

// Child.prototype = parent;
// Child.prototype.constructor = Child;

// const child = new Child();
// const child1 = new Child();
// 缺点： 1. 如果父类中的引用类型的变量进行修改， 所有子类都会变。 2. 无法从子类向父类传参，类似 super;

// 3. 组合式继承
// function Parent() {
//   this.message = {
//     name: "parent",
//     age: 18,
//   };
// }

// Parent.prototype.getMessage = function () {
//   return this.message;
// };

// function Child() {
//   Parent.call(this);
//   this.type = "child";
// }

// Child.prototype = new Parent();
// Child.prototype.constructor = Child;

// const child1 = new Child();
// const child2 = new Child();

// child1.message.name = 'child';
// 缺点：父类的parent构造函数会执行两次， 并且子类原型中有两份相同的属性和方法

// 4. 寄生式组合继承
function Parent() {
  this.message = {
    name: "parent",
    age: 18,
  };
}

Parent.prototype.getMessage = function () {
  return this.message;
};

function Child() {
  Parent.call(this);
  this.type = "child";
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
