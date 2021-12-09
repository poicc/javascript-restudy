let obj1 = { name: 'ssy', age: 20 };
let obj2 = { city: 'nanjing', age: 30 };
let obj3 = {};

Object.assign(obj3, obj1, obj2); // 将 obj1、obj2的内容赋值给 obj3
console.log(obj3); // {name: "ssy", age: 30, city: "nanjing"}