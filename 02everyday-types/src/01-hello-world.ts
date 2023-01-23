let str: string = "hello typescript"
let num: number = 100;
let bool: boolean = true

let arr: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
arr2 = [4]

let obj: any = {
  x: 0
}

// obj.foo()
// obj()
// obj.bar = 100
// obj = 'hello'
// const n: number = obj

let myName: string = 'Felixlu'

function greet(name: string) {
  console.log('hello,' + name.toUpperCase() + "!!")
}
greet('haliluya')

function getFavoriteNumber(): number {
  return 26
}

const names = ["cathy", "lucly", "tommy"]
names.forEach(function (s) {
  console.log(s.toUpperCase())
})

function printCoord(pt:{x:number;y:number}){
console.log('坐标的x值为'+pt.x)
console.log('坐标的y值为'+pt.y)
}

printCoord({
  x:3,y:7
})

function printId(id:number | string){

}

printId(101)

function welcome(x:string[]|string){
  if(Array.isArray(x)){
    console.log('hello'+x.join('and'))
  }else{
    console.log('welcome lone traveler'+x)
  }
}
welcome('A')
welcome(['a','b','c'])

type Point = {
  x:number;
  y:number
}
function print(pt:Point){

}
print({
  x:100,
  y:200
})

type ID=number|string

interface ITF{
  x:number
  y:number
}
function print2(pt:ITF){

}
print({
  x:100,
  y:200
})

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

const x=('hello' as any) as number

function printText(s:string,alignment:'left'|'right'|'center'){

}
printText('hello','left')

function compare(a:string,b:string):-1 | 0 | 1{
  return a===b? 0:a<b?1:-1
}

interface Options{
  width:number
}
function configure(x:Options|'auto'){

}
configure({
  width:100
})
configure('auto')
let b1:true=true
let b2:false=false

const obj2={
  count:0
}
if(true){
  obj.count=1;
}

let xx:undefined=undefined
let y:null=null
let z:string=undefined

function liveDangerously(x?:number | null){
  console.log(x!.toFixed())
}

//枚举
enum Direction{
  Up=5,
  Down,
  Left,
  Right
}
console.log(Direction.Up)
console.log(Direction.Down)
