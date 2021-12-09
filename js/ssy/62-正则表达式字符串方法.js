// var str = "1a2b3c4d5e6f7g";

// var result = str.split(/[A-z]/); // 参数是一个正则表达式：表示所有字母
// console.log(result);


// var str1 = "hello abc hello aec afc";
// /*
// * 搜索字符串中是否含有abc 或 aec 或 afc
// */
// result1 = str1.search(/a[bef]c/);
// console.log(result1); // 打印结果：6

var str = "1a2a3a4a5e6f7A8B9C";

var result1 = str.match(/[a-z]/);   // 找到符合要求的第一个内容，然后返回
var result2 = str.match(/[a-z]/g);  // 设置为“全局匹配”模式，匹配字符串中 所有的小写字母
var result3 = str.match(/[a-z]/gi); // 设置多个匹配模式，匹配字符串中 所有的字母（忽略大小写）

console.log(result1); // 打印结果：["a"]
console.log(result2); // 打印结果：["a", "a", "a", "a", "e", "f"]
console.log(result3); // 打印结果：["a", "a", "a", "a", "e", "f", "A", "B", "C"]


//replace()方法：替换
var str2 = "Today is fine day,today is fine day !!!"

console.log(str2);
console.log(str2.replace("today","tomorrow"));  //只能替换第一个today
console.log(str2.replace(/today/gi,"tomorrow")); //这里用到了正则，且为“全局匹配”模式，才能替换所有的today