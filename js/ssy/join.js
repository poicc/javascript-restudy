var array = [1, 2, 3, 4, 5, 6];
array.splice(0); //方式1：删除数组中所有项目
array.length = 0; //方式2：length属性可以赋值，在其它语言中length是只读
array = []; //方式3：推荐

//将一个字符串数组输出为|分割的形式，比如“流行|抒情|民谣”。使用两种方式实现。
//方式 1：（不推荐）
// var arr = ['流行', '抒情', '民谣'];
// var str = arr[0];
// var separator = '|';
// for (var i = 1; i < arr.length; i++) {
//     str += separator + arr[i]; //从第1个数组元素开始，每个元素前面加上符号"|"
// }
// console.log(str);

//（推荐，通过 array 数组自带的 api 来实现）
var arr = ['流行', '抒情', '民谣'];
console.log(arr.join('|'));