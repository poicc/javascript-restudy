let obj1 = {
    name: 'ssy',
    age: 28,
    info: {
        desc: 'hello',
    },
    color: ['red', 'blue', 'green'],
}

let obj2 = {}
deepCopy(obj2, obj1)
console.log(obj2)
obj1.info.desc = 'github'
console.log(obj2)

// 方法：深拷贝
function deepCopy(newObj, oldObj) {
    for (let key in oldObj) {
        // 获取属性值 oldObj[key]  
        let item = oldObj[key]
        // 判断这个值是否是数组      
        if (item instanceof Array) {
            newObj[key] = []
            deepCopy(newObj[key], item)
        } else if (item instanceof Object) {
            // 判断这个值是否是对象        
            newObj[key] = {}
            deepCopy(newObj[key], item)
        } else {
            // 简单数据类型，直接赋值 
            newObj[key] = item
        }
    }
}