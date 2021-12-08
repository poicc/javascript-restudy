/**
 * 检查一个字符串是否是一个合法手机号
 */
function phone(phoneStr) {
    var phoneStr1 = "13067890123";
    var phoneReg = /^1[3-9][0-9]{9}$/;
    console.log(phoneReg.test(phoneStr1));
    return phoneReg.test(phoneStr)
}

/**
 * 去掉字符串开头和结尾的空格
 */
function space(str) {
    return str.replace(/^\s*|\s*$/g,"");
}

/**
 * 判断字符串是否为电子邮件
 */
function email(email) {
    var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
	var email1 = "abchello@163.com";
	console.log(emailReg.test(email1));
    return emailReg.test(email);
}