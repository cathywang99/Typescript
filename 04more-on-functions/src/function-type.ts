function greeter(fn:(a:string)=>void){
  fn('hello,world')
}

function printToConsole(s:string){
  console.log(s)
}

greeter(printToConsole)

type DescribableFunction={
  description:string
  (someArg:number):boolean
}
function doSomething(fn:DescribableFunction){
  console.log(fn.description+' returned '+fn(6))
}
function fn1(n:number){
  console.log(n)
  return true
}
fn1.description='hello'

doSomething(fn1)

class Ctor{
  s:String
  constructor(s:string){
    this.s=s
  }
}
type SomeConstructor={
  new (s:string):Ctor
}
function fn(ctor:SomeConstructor){
  return  new ctor('hello')
}
const f=fn(Ctor)
console.log(f.s)

// interface CallOrConstructor{
//   new(s:string):Date
//   (n?:number):number
// }
// function fn(date:CallOrConstructor){
//   let d=new date('2021-12-20')
//   let n=date(100)
// }

function firstElement<Type>(arr:Type[]):Type|undefined{
  return arr[0]
}
console.log(firstElement(['a','b','c']))
console.log(firstElement([1,2,3]))
console.log(firstElement([]))


function map<Input,Output>(arr:Input[],func:(arg:Input)=>Output):Output[]{
  return arr.map(func)
}
//通过给map传递的两个参数，推断出Input类型是字符串string，Output类型是number类型
const parsed=map(['1','2','3'],(n)=>parseInt(n))
//extends是限制条件，length告诉泛型，传入的参数必须有length属性，限制了条件
function longest<Type extends {length:number}>(a:Type,b:Type){
  if(a.length>=b.length){
    return a
  }else{
    return b
  }
}
const longerArray=longest([1,2],[2,3,4])
const longerString=longest('felix','lu')
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

function combine<Type>(arr1:Type[],arr2:Type[]):Type[]{
  return arr1.concat(arr2)
}
const arr3=combine<number|string>([1,2,3],['string'])
console.log(arr3)

function firstElement1<Type>(arr:Type[]){
  return arr[0]
}
function firstElement2<Type extends any[]>(arr:Type){
  return arr[0]
}
const a =firstElement1([1,2,3])
const b =firstElement2([1,2,3])

function ff(n:number=100){
  console.log(n.toFixed())
  console.log(n.toFixed(3))
}
ff(123.45)
ff()

function myForEach(arr:any[],callback:(arg:any,index?:number)=>void){
  for(let i=0;i<arr.length;i++){
    // callback(arr[i],i)
    callback(arr[i])
  }
}

// myForEach([1,2,3],(a)=>console.log(a))
// myForEach([1,3,4],(a,i)=>console.log(a,i))
myForEach([1,2,3],(a,i)=>{
  //console.log(i.toFixed())
})

function makeDate(timeStamp:number):Date
function makeDate(m:number,d:number,y:number):Date
function makeDate():Date{
  // if(d!==undefined&&y!==undefined){
     return new Date()
  // }
}

interface User{
  admin:boolean
}

interface DB{
  filterUsers(filter:
    (this:User)=>boolean):User[]
}

const db:DB = {
  filterUsers:(filter:(this:User)=>boolean)=>{
    let user1:User={
      admin:true
    }
    let user2:User={
      admin:false
    }
    return [user1,user2]
  }
}
const admins=db.filterUsers(function(this:User){
  return this.admin
})

console.log(admins)

 function multiply(n:number,...m:number[]){
  return m.map(x=>n*x)
 }

 const m=multiply(10,1,2,3,4)

function he({a,b,c}:{a:number,b:number,c:number}){
  console.log(a+b+c)
}
he({
  a:10,
  b:3,
  c:9
})

type voidFunc=()=>void
const f1:voidFunc=()=>{
  return 'hello'
}
const f2:voidFunc=()=>true
const f3:voidFunc=function(){
  return true
}
const v1:void=f1()
const v2=f2()
const v3=f3()

// function f4():void{
//   return true
// }
// function f4=function():void{
//   return f5
// }
