var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el')); // [].slice.call 这种方式可以将伪数组变为数组，才能使用 forEach 遍历
$elsArr.forEach(function ($el) {
  $el.addEventListener('click', function () {
    if (this.classList.contains('s--active')) return; // 如果已经点击放大了模块那么就 return，不再执行下面代码
    $cont.classList.add('s--el-active'); // 给 .cont 类元素添加 s--el-active 类
    this.classList.add('s--active'); // 给点击的 .el 类添加 s--active
  });
});

var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

// 点击关闭按钮时触发的事件
$closeBtnsArr.forEach(function ($btn) {
  $btn.addEventListener('click', function (e) {
    e.stopPropagation(); // 防止事件冒泡
    $cont.classList.remove('s--el-active'); // 关闭放大模块时给 .cont 类元素移除 s--el-active 类
    document.querySelector('.el.s--active').classList.remove('s--active'); // 找到 .el 类中包含 s--active 类的元素，并把 s--active 移除
  });
});