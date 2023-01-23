"use strict";
// function greet(person:{name:string,age:number}){
//   return 'Hello'+person.name
// }
// interface person{
//   name:string
//   age:number
// }
// function greet(person:Person){
//   return 'Hello'+person.name
// }
// function paintShape(opts:PaintOptions){
//   let xPos=opts.xPos===undefined?0:opts.xPos
//   let yPos=opts.yPos===undefined?0:opts.yPos
//   console.log(xPos)
// }
function paintShape({ shape: Shape, xPos: number = 0, yPos = 0 }) {
    console.log(Shape), number;
}
const shape = {};
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100, xPos: 200 });
function doSomething(obj) {
    console.log(obj.prop);
}
const myArray = ['a', 'b'];
const secondItem = myArray[0];
let testString = {
    x: 100,
    y: 200,
    aaa: 300
};
let awu = {
    unit: '33',
    street: '清河',
    city: '北京',
    postalCode: '1000',
    country: '中国',
    name: 'ahaa'
};
const cc = {
    color: 'red',
    radius: 100
};
const cnc = {
    color: 'red',
    radius: 100
};
function draw(circle) {
}
draw({
    color: "red",
    radius: 100
});
draw({
    color: "green",
    radius: 200
});
let a = {};
let ab = {
    contents: a
};
