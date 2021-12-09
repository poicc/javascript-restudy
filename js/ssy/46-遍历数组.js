let arr1 = [2, 6, 8, 5];
//for ... of获取的是数组里的值
//采用for ... in遍历数组，则获取的是 index 索引值
for (let value of arr1) { 
  console.log(value);
}

//for in：遍历对象的属性
// for (var key in obj) {   
//     console.log(key);      // 这里的key是对象属性的键（也就是属性名）
//     console.log(obj[key]); // 这里的obj[key] 是对象属性的值（也就是属性值）
//   }