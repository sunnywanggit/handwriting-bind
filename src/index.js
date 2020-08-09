function myBind(asThis,...args) {
    //this 就是使用 bind 的函数
    const fn = this;
    return function () {
        return fn.call(asThis,...args)
    }
}

module.exports = myBind;


if(!Function.prototype.bind){
    Function.prototype.bind = myBind;
}