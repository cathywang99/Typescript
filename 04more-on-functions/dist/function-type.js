"use strict";
function greeter(fn) {
    fn('hello,world');
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function doSomething(fn) {
    console.log(fn.description + ' returned ' + fn(6));
}
function fn1(n) {
    console.log(n);
    return true;
}
fn1.description = 'hello';
doSomething(fn1);
class Ctor {
    constructor(s) {
        this.s = s;
    }
}
function fn(ctor) {
    return new ctor('hello');
}
const f = fn(Ctor);
console.log(f.s);
// interface CallOrConstructor{
//   new(s:string):Date
//   (n?:number):number
// }
// function fn(date:CallOrConstructor){
//   let d=new date('2021-12-20')
//   let n=date(100)
// }
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement(['a', 'b', 'c']));
console.log(firstElement([1, 2, 3]));
console.log(firstElement([]));
function map(arr, func) {
    return arr.map(func);
}
//通过给map传递的两个参数，推断出Input类型是字符串string，Output类型是number类型
const parsed = map(['1', '2', '3'], (n) => parseInt(n));
//extends是限制条件，length告诉泛型，传入的参数必须有length属性，限制了条件
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
const longerArray = longest([1, 2], [2, 3, 4]);
const longerString = longest('felix', 'lu');
//const notOK=longest(10,100)
// function minimumLength<Type extends {length:number}>(
//   obj:Type,
//   minimum:number
// ):Type{
//   if(obj.length>=minimum){
//     return obj
//   }else{
//     return {length:minimum}
//   }
// }
// const arr=minimumLength([1,2,3],6)
// console.log(arr.slice(0))
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
const arr3 = combine([1, 2, 3], ['string']);
console.log(arr3);
function firstElement1(arr) {
    return arr[0];
}
function firstElement2(arr) {
    return arr[0];
}
const a = firstElement1([1, 2, 3]);
const b = firstElement2([1, 2, 3]);
function ff(n = 100) {
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}
ff(123.45);
ff();
function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        // callback(arr[i],i)
        callback(arr[i]);
    }
}
// myForEach([1,2,3],(a)=>console.log(a))
// myForEach([1,3,4],(a,i)=>console.log(a,i))
myForEach([1, 2, 3], (a, i) => {
    //console.log(i.toFixed())
});
function makeDate() {
    // if(d!==undefined&&y!==undefined){
    return new Date();
    // }
}
const db = {
    filterUsers: (filter) => {
        let user1 = {
            admin: true
        };
        let user2 = {
            admin: false
        };
        return [user1, user2];
    }
};
const admins = db.filterUsers(function () {
    return this.admin;
});
console.log(admins);
function multiply(n, ...m) {
    return m.map(x => n * x);
}
console.log(multiply(10, 1, 2, 3, 4))

