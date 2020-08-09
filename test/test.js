const myBind = require('../src/index')





function test1(message){
    console.log(message);
    Function.prototype.myBind = myBind;
    console.assert(Function.prototype.myBind != undefined);
}

function test2(message) {
    console.log(message);
    Function.prototype.myBind = myBind;
    const fn1 = function () {
        return this;
    }
    const newFn1 = fn1.myBind({name:'wang'})
    console.assert(newFn1().name === 'wang');
}

function test3(message) {
    console.log(message);
    Function.prototype.myBind = myBind;
    const fn2 = function (p1,p2) {
        return [this,p1,p2];
    }
    const newFn2 = fn2.myBind({name:"wang"},1,2)
    console.assert(newFn2()[0].name === 'wang')
    console.assert(newFn2()[1] === 1)
    console.assert(newFn2()[2] === 2)
}

function test4(message) {
    console.log(message);
    Function.prototype.myBind = myBind;
    const fn2 = function (p1,p2) {
        return [this,p1,p2];
    }
    const anotherFn2 = fn2.myBind({name:'wang'})
    console.assert(anotherFn2(1,2)[0].name === 'wang')
    console.assert(anotherFn2(1,2)[1] === 1)
    console.assert(anotherFn2(1,2)[2] === 2)
}

function test5(message) {
    console.log(message);
    Function.prototype.myBind = myBind;
    const fn2 = function (p1,p2) {
        return [this,p1,p2];
    }
    const anotherFn3 = fn2.myBind({name:'wang'},1)
    console.assert(anotherFn3(2)[0].name === 'wang')
    console.assert(anotherFn3(2)[1] === 1)
    console.assert(anotherFn3(2)[2] === 2,'anotherfn3 2')
}

test1('myBind 可以使用')
test2('this 绑定成功')
test3('this p1 p2 绑定成功')
test4('this 绑定成功，后传 p1 p2 绑定成功')
test5('this 绑定成功，传 p1 绑定成功，再传 p2 绑定成功')


















