const obj1 = {
    name: 'ssy',
    age: 20,
    desc: 'hello world',
};

const obj2 = {
    name: '张三',
    gender: '男',
};


Object.assign(obj2, obj1);

console.log(JSON.stringify(obj2));