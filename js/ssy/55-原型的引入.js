// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     //向对象中添加一个方法
//     this.sayName = function () {
//       console.log("我是" + this.name);
//     }
//   }
  
//   //创建一个Person的实例
//   var per = new Person("aaa", 18, "男");
//   var per2 = new Person("bbb", 28, "男");
//   per.sayName();
//   per2.sayName();
  
//   console.log(per.sayName == per2.sayName);  //false


  function Person (name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
    //向对象中添加一个方法
    this.sayName = fun
  }
  
  //将sayName方法在全局作用域中定义
  /*
   * 将函数定义在全局作用域，污染了全局作用域的命名空间
   *  而且定义在全局作用域中也很不安全
  */
  function fun () {
    console.log("Hello大家好，我是:" + this.name)
  }
  
  let per = new Person('aaa', 20, '男')
  per.sayName()