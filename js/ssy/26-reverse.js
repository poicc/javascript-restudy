//将一个字符串数组的元素的顺序进行反转，使用两种方式实现。
//方式 1：
function reverse(array) {
    var newArr = []
    for (var i = array.length - 1; i >= 0; i--) {
        newArr[newArr.length] = array[i]
    }
    return newArr
}
var arr = [4, 5, 2, 9, 7]
let res = reverse(arr)
console.log(res)

//方式 2
function reverse(array) {
    for (var i = 0; i < array.length / 2; i++) {
        var temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}
var arr = [4, 5, 2, 9, 7]
let res = reverse(arr)
console.log(res)

//方式 3：（数组自带的 reverse 方法）
var arr = [4, 5, 2, 9, 7]
let res = arr.reverse()
console.log(res)