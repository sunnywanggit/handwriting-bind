const myBind = require('../src/index')

Function.prototype.myBind = myBind;

console.assert(Function.prototype.myBind != undefined);

const fn1 = function () {
    return this;
}

const newFn1 = fn1.myBind({name:'wang'})
console.assert(newFn1().name === 'wang');

