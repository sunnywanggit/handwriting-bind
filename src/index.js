function myBind(asThis) {
    //this 就是使用 bind 的函数
    const fn = this;
    return function () {
        return fn.call(asThis)
    }
}

module.exports = myBind;


if(!Function.prototype.bind){
    Function.prototype.bind = myBind;
}