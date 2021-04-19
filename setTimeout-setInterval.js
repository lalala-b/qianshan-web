// setTimeout  延时器  第一个参数是方法，第二个参数就是时间ms  clearTimeout
// setInterval 定时器  第一个参数是方法，第二个参数就是时间ms  clearInterval

const time = function () {
  console.info(1);
};

function foo() {
  const timer = setInterval(time, 1000);

  setTimeout(function () {
    clearInterval(timer);
  }, 3000);
}

foo();
