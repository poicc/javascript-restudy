var myJson = {
    name: 'ssy',
    aaa: 111,
    bbb: 222,
};

//JSON遍历的方法：for...in...
for (var key in myJson) {
    console.log(key); //获取 键
    console.log(myJson[key]); //获取 值（第二种属性绑定和获取值的方法）
    console.log('------');
}