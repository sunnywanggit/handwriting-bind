function myBind(asThis,...args) {
    //this 就是使用 bind 的函数
    // 这里之所有要写成 var 是因为我们要兼容ie，如果浏览器练bind都不支持，那么肯定不会支持 let 和 const
    var fn = this;
    return function (...args2) {
        return fn.call(asThis,...args,...args2)
    }
}

module.exports = myBind;


if(!Function.prototype.bind){
    Function.prototype.bind = myBind;
}