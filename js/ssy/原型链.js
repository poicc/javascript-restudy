//创建方法
function Foo(name) {
  this.name = name;
}

Foo.prototype.alertName = function () {
  // 既然 Foo.prototype 是普通的对象，那也允许给它添加额外的属性 alertName
  console.log(this.name);
}


var fn = new Foo('hello');
fn.printName = function () {
  console.log(this.name);
}

//测试
fn.printName();   //输出结果：hello
fn.alertName();   //输出结果：hello


function Person(){
}

//p--->Person.prototype--->Object.prototype--->null
var p = new Person();
//构造函数的**原型**是否在 p 对象的原型链上！
console.log(p instanceof Person);