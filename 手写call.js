Function.prototype.myCall = function (context, ...args) {
  context = context ? Object(context) : window;
  context.fn = this;
  var result = context.fn(...args);
  delete context.fn;
  return result;
};

const a = {
  name: "a",
};

const b = {
  name: "b",
  getName: function () {
    // arguments 所有的实参 {0: 'a', 1: 'b', length: 2}
    return this.name;
  },
};

console.info(b.getName.myCall(a));
