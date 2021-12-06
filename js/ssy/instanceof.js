function Person () { }

function Dog () { }

var person1 = new Person()

var dog1 = new Dog()

console.log(person1 instanceof Person) // 打印结果： true
console.log(dog1 instanceof Person) // 打印结果：false

console.log(dog1 instanceof Object) // 所有的对象都是Object的后代。因此，打印结果为：true