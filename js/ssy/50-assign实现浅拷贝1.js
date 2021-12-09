const myObj = {
    name: 'ssy',
    age: 20,
};

// 【写法1】浅拷贝：把 myObj 拷贝给 obj1
const obj1 = {};
Object.assign(obj1, myObj);

// 【写法2】浅拷贝：把 myObj 拷贝给 obj2
const obj2 = Object.assign({}, myObj);

// 【写法3】浅拷贝：把 myObj 拷贝给 obj31。注意，这里的 obj31 和 obj32 其实是等价的，他们指向了同一个内存地址
const obj31 = {};
const obj32 = Object.assign(obj31, myObj);