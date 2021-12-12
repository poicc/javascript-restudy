console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);
console.log(3);
console.log(4);


// setTimeout()/ setInterval() 的每调用一次定时器的最小时间间隔是4毫秒，这通常是由于函数嵌套导致（嵌套层级达到一定深度），或者是由于已经执行的 setInterval 的回调函数阻塞导致的。

// 下面的案例中，异步任务需要等待 1004 毫秒之后，才会从 Event Table 进入到 Event Queue
setTimeout(() => {
    console.log('异步任务');
}, 1000);
