const myBind = require('../src/index')

Function.prototype.myBind = myBind;

console.assert(Function.prototype.myBind != undefined);

const fn1 = function () {
    return this;
}

const newFn1 = fn1.myBind({name:'wang'})
console.assert(newFn1().name === 'wang');

const fn2 = function (p1,p2) {
    return [this,p1,p2];
}

const newFn2 = fn2.myBind({name:"wang"},1,2)
console.assert(newFn2()[0].name === 'wang')
console.assert(newFn2()[1] === 1)
console.assert(newFn2()[2] === 2)

const anotherFn2 = fn2.myBind({name:'wang'})
console.assert(anotherFn2(1,2)[0].name === 'wang')
console.assert(anotherFn2(1,2)[1] === 1)
console.assert(anotherFn2(1,2)[2] === 2)

const anotherFn3 = fn2.myBind({name:'wang'},1)
console.assert(anotherFn3(2)[0].name === 'wang')
console.assert(anotherFn3(2)[1] === 1)
console.assert(anotherFn3(2)[2] === 2,'anotherfn3 2')


















