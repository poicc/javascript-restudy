// function fn1(a, b, callback) {
//     console.log(a + b);
//     // 执行完上面的 console.log() 语句之后，再执行下面这个 callback 函数。
//     // 也就是说，这个 callback 函数是最后执行的。
//     callback && callback();
// }

// fn1(10, 20, function () {
//     console.log('我是最后执行的函数');
// });

function fn1() {
    let a = 20

    return function () {
        console.log(a)
    }
}

const foo = fn1() // 执行 fn1() 之后，会得到一个返回值，这个返回值是函数
foo() //调用foo函数，得到打印结果20