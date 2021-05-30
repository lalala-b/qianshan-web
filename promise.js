// promise是异步编程的一种解决方法, 比传统的回调函数和事件更合理更强大。
// 他由社区最早提出和实现，ES6将其写进语言标准，统一了用法，原生提供了promise对象。
// 所谓promise，简单说是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果，从语法上说，promise是一个对象，从它可以获取异步操作的消息，
// promise提供了统一的API，各种异步操作都可以用同样的方法进行处理。

// promise对象的特点
// （1）对象的状态不受外界影响，promise对象代表一个异步操作，有三种状态，pending（进行中）、fulfilled（已成功）、rejected（已失败）。
// 只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态

// （2）一旦状态改变就不会再变，任何时候都可以得到这个结果，promise对象的状态改变，
// 只有两种可能：从pending变为fulfilled，从pending变为rejected。这时就称为resolved（已定型）。
// 如果改变已经发生了，你再对promise对象添加回调函数，也会立即得到这个结果，这与事件（event）完全不同，事件的特点是：如果你错过了它，再去监听是得不到结果的。

// 有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。

// Promise也有一些缺点。
// 首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。
// 其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
// 第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）

// 1. new Promise() 参数传入函数 传入的函数立即执行。该函数接受两个参数， resolved rejected

// new Promise((resolved, rejected) => {

// })

// 2. 获取resolved || rejected 结果 .then。 接收两个参数，都是函数, 第一个用于接收fulfilled ,第二个用于接收rejected
// new Promise((resolved, rejected) => {

// }).then(function (res) {
//   console.info(res)
// }, function (error) {
//   console.info(error);
// })

// 3. catch  捕捉异常的

// new Promise((resolved, rejected) => {

// }).catch(() => {

// })

// 4.finally  不管成功还是失败 都会执行finally.   .finally

// 5. promise.all()  接收的是一个数组，数组的每一个元素 都是一个promise, 数组当中请求全部完成时才会返回， 有一个失败，全都失败，&&
// Promise.all([
//   login,
//   getList,
// ]).then

// 6. promise.race()  数组当中谁快谁返回。

// new Promise(function (resolve, reject) {

// }).then(res => {

// })

// 哪一个阶段是同步的 哪一个阶段是异步的。
