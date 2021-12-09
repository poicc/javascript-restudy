//arguments只在函数中使用。
// fn(2, 4);
// fn(2, 4, 6);
// fn(2, 4, 6, 8);

//arguments.length 可以用来获取实参的长度。
// function fn(a, b) {
//     console.log(arguments);
//     console.log(fn.length); //获取形参的个数
//     console.log(arguments.length); //获取实参的个数
//     console.log('----------------');
// }

//arguments.callee 对应一个函数对象，就是当前正在指向的函数对象
// function fun() {
//     console.log(arguments.callee == fun); //打印结果为true
// }

// fun('hello');

//arguments是伪数组 可以修改元素，但不能改变数组的长短
// fn(2, 4);
// fn(2, 4, 6);
// fn(2, 4, 6, 8);

// function fn(a, b) {
//     arguments[0] = 99; //将实参的第一个数改为99
//     arguments.push(8); //此方法不通过，因为无法增加元素
// }

//利用 arguments 求函数实参中的最大值
function getMaxValue() {
    var max = arguments[0];
    // 通过 arguments 遍历实参
    for (var i = 0; i < arguments.length; i++) {
        if (max < arguments[i]) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(getMaxValue(1, 3, 7, 5));   //输出结果：7