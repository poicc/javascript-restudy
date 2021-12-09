function fun6(e) { // 这个函数中，因为有了形参 e，此时就相当于在函数内部的第一行代码里，写了 var e;
    console.log(e);
}

fun6();   //打印结果为 undefined
fun6(123);//打印结果为123

var num = 10;
function fn() {
    // 外部函数   
    var num = 20;
    function fun() {
        // 内部函数     
        console.log(num);
    }
    fun();
}
fn();