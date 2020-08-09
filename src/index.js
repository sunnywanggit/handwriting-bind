
var slice = Array.prototype.slice;

//这里是与 es6 等价的 es3 的写法
function myBind(asThis) {
    //this 就是使用 bind 的函数
    // 这里之所有要写成 var 是因为我们要兼容ie，如果浏览器练bind都不支持，那么肯定不会支持 let 和 const
    var thatFunc = this;
    //获取除了 asThis 其余的参数,之前是用的 ...args，但是为了兼容性问题，我们需要换一种方式
    var args = slice.call(arguments,1)
    if(typeof thatFunc != 'function'){
        throw new Error('bind 必须调用在函数身上')
    }

    return function () {
        var args2 = slice.call(arguments,0)
        return thatFunc.apply(asThis,args.concat(args2))
    }
}

//这里是 es6 的写法
function _myBind(asThis,...args) {
    //this 就是使用 bind 的函数
    const fn = this;
    return function (...args2) {
        return fn.call(asThis,...args,...args2)
    }
}


module.exports = myBind;


if(!Function.prototype.bind){
    Function.prototype.bind = myBind;
}