function printAll(strs:string|string[]|null){
  if(strs && typeof strs ==="object"){
    for(const s of strs){
      console.log(s);
    }

  }else if(typeof strs==="string"){
    console.log(strs);
  }else{
    //...
  }
}

function example(x:string|number,y:string|boolean){
  if(x===y){
    x.toUpperCase()
    y.toLowerCase()
  }
  }

  interface Container{
    value:number|null|undefined
  }

function multiplyValue(container:Container,factor:number){
  if(container.value!=null){
    console.log(container.value)
    container.value*=factor
  }
}
multiplyValue({value:5},6)
multiplyValue({value:undefined},6)

type Fish={swim:()=>void}
type Bird={fly:()=>void}
type Human={ swim?:()=>void;fly?:()=>void}

function move(animal:Fish|Bird|Human){
  if("swim" in animal){
    return (animal as Fish).swim()
  }
  return (animal as Bird).fly()
}

function logValue(x:Date | string){
   if(x instanceof Date){
    console.log(x.toUTCString())
   }else{
    console.log(x.toUpperCase())
   }
}
logValue(new Date())
logValue('hello ts')

//let x:string|number
let x=Math.random()<0.5?10:'hello world'

//let x:number
x=1
console.log(x)

//let x=string
x='goodbye'
console.log(x)

type Fishes={
  name:string
  swim:()=>void
}
type Birds={
  name:string
  fly:()=>void
}
function isFish(pet :Fishes|Birds){
  return (pet as Fishes).swim!==undefined
}
function getSmallPet():Fishes|Birds{
  let fish:Fishes={
    name:'sharkey',
    swim:()=>{

    }
  }
  let bird:Birds={
    name:'sparrow',
    fly:()=>{

    }
  }
  return true?bird:fish
}

let pet=getSmallPet()

/* interface Shape{
  kind:'circle'|'square'
  radius?:number
  sideLength?:number
} */


interface Circle{
  kind:'circle'
  radius:number
}
interface Square{
  kind:'square'
  sideLength:number
}
interface Triangle{
  kind:'triangle'
  sideLength:number
}
type Shape=Circle|Square|Triangle

function getArea(shape:Shape){
  //因为radius属性是可选择的，可能没有，所以我们在radius后面加一个!，告诉ts这个属性是一定存在的。
  // return Math.PI*shape.radius!**2
  switch(shape.kind){
    case 'circle':
    return Math.PI*shape.radius**2

    case 'square':
      return shape.sideLength**2

    default:
      const exhaustiveCheck:never=shape
      return exhaustiveCheck
  }
}