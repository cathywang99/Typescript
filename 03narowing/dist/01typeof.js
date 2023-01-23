"use strict";
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
        //...
    }
}
function example(x, y) {
    if (x === y) {
        x.toUpperCase();
        y.toLowerCase();
    }
}
function multiplyValue(container, factor) {
    if (container.value != null) {
        console.log(container.value);
        container.value *= factor;
    }
}
multiplyValue({ value: 5 }, 6);
multiplyValue({ value: undefined }, 6);
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
logValue(new Date());
logValue('hello ts');
//let x:string|number
let x = Math.random() < 0.5 ? 10 : 'hello world';
//let x:number
x = 1;
console.log(x);
//let x=string
x = 'goodbye';
console.log(x);
