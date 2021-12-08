function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
	}

	//方式一：重写 Person 原型的toString方法。针对 Person 的所有实例生效
	Person.prototype.toString = function() {
		return (
		  "Person[name=" +
		  this.name +
		  ",age=" +
		  this.age +
		  ",gender=" +
		  this.gender +
		  "]"
		);
	};

	// 方式二：仅重写实例 per1 的 toString方法。
  //但是这种写法，只对 per1 生效， 对 per2 无效
	/*
	per1.toString = function() {
		return (
		  "Person[name=" +
		  this.name +
		  ",age=" +
		  this.age +
		  ",gender=" +
		  this.gender +
		  "]"
		);
	};
	*/

	var per1 = new Person("aaa", 26, "男");

	var per2 = new Person("bbb", 30, "男");

	console.log("per1 = " + per1);
	console.log("per2 = " + per2.toString());