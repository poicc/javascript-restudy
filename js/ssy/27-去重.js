var arr = [1, 2, 3, 4, 5, 2, 3, 4];
console.log(arr);
var aaa = fn(arr);
console.log(aaa);
//思路：创建一个新数组，循环遍历，只要新数组中有老数组的值，就不用再添加了。
function fn(array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        //开闭原则
        var bool = true;
        //每次都要判断新数组中是否有旧数组中的值。
        for (var j = 0; j < newArr.length; j++) {
            if (array[i] === newArr[j]) {
                bool = false;
            }
        }
        if (bool) {
            newArr[newArr.length] = array[i];
        }
    }
    return newArr;
}