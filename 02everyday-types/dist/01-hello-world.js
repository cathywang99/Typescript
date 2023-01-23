let str = "hello typescript";
let num = 100;
let bool = true;
let arr = [1, 2, 3];
let arr2 = [1, 2, 3];
arr2 = [4];
let obj = {
    x: 0
};
// obj.foo()
// obj()
// obj.bar = 100
// obj = 'hello'
// const n: number = obj
let myName = 'Felixlu';
function greet(name) {
    console.log('hello,' + name.toUpperCase() + "!!");
}
greet('haliluya');
function getFavoriteNumber() {
    return 26;
}
const names = ["cathy", "lucly", "tommy"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
function printCoord(pt) {
    console.log('坐标的x值为' + pt.x);
    console.log('坐标的y值为' + pt.y);
}
printCoord({
    x: 3, y: 7
});
function printId(id) {
}
printId(101);
function welcome(x) {
    if (Array.isArray(x)) {
        console.log('hello' + x.join('and'));
    }
    else {
        console.log('welcome lone traveler' + x);
    }
}
welcome('A');
welcome(['a', 'b', 'c']);
function print(pt) {
}
print({
    x: 100,
    y: 200
});
function print2(pt) {
}
print({
    x: 100,
    y: 200
});
// interface Animal{
//   name:string
// }
// interface Bear extends Animal{
//   honey:boolean
// }
// const bear:Bear={
//   name:'winnie',
//   honey:true
// }
// console.log(bear.name);
// console.log(bear.honey);
// type Animal{
//   name:string
// }
// interface Bear extends Animal{
//   honey:boolean
// }
// const bear:Bear={
//   name:'winnie',
//   honey:true
// }
// console.log(bear.name);
// console.log(bear.honey);
// const myCanvas=document.getElementById('main_canvas') as HTMLCanvasElement
// const myCanvas2=<HTMLCanvasElement>document.getElementById('main_canvas')
const x = 'hello';
function printText(s, alignment) {
}
printText('hello', 'left');
function compare(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
}
function configure(x) {
}
configure({
    width: 100
});
configure('auto');
let b1 = true;
let b2 = false;
const obj2 = {
    count: 0
};
if (true) {
    obj.count = 1;
}
let xx = undefined;
let y = null;
let z = undefined;
function liveDangerously(x) {
    console.log(x.toFixed());
}
//枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 5] = "Up";
    Direction[Direction["Down"] = 6] = "Down";
    Direction[Direction["Left"] = 7] = "Left";
    Direction[Direction["Right"] = 8] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction.Down);

console.log(typeof null)