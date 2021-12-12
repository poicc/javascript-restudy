// $("#btn").click(function(){
//     $.ajax({
//       url:"/api?callback=fn",
//       dataType:"jsonp",
//       type:"get",
//       //jsonp:"callback",   //传递给B服务器的回调函数的名字（默认为 callback）
//       //jsonCallBack:"fn"    //自定义的函数名称。默认为 jQuery 自动生成的随机函数名
//       success:function(data){
//         alert(data);
//         //$("#showInfo").html(data);
//       },
//       error:function(e){
//         console.log(e);
//       }
//     });
//   });



// 如果数据是 JSONP 上方代码则改
$("#btn").click(function () {
    $.ajax({
        url: "/api?fn",
        dataType: "text",
        type: "get",
        success: function (data) {
            alert(data);
            //$("#showInfo").html(data);
        },
        error: function (e) {
            console.log(e);
        }
    });
});