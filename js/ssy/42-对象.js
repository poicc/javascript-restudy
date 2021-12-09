/*
 * 使用工厂方法创建对象
 * 通过该方法可以大批量的创建对象
 */
function createPerson (name, age, gender) {
    //创建一个新的对象
    var obj = new Object()
    //向对象中添加属性
    obj.name = name
    obj.age = age
    obj.gender = gender
    obj.sayName = function () {
      alert(this.name)
    }
    //将新的对象返回
    return obj
  }
  
  var obj2 = createPerson('aaa', 20, '男')
  var obj3 = createPerson('bbb', 21, '女')
  var obj4 = createPerson('ccc', 22, '女')
  console.log(JSON.stringify(obj2))
  console.log(JSON.stringify(obj3))
  console.log(JSON.stringify(obj4))