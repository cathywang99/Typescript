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

// type Person={
//    name:string
//    age:number
// }
// function greet(person:Person){
// }
type Shape={}

interface PaintOptions{
  shape:Shape,
  xPos?:number,
  yPos?:number
}
// function paintShape(opts:PaintOptions){
//   let xPos=opts.xPos===undefined?0:opts.xPos
//   let yPos=opts.yPos===undefined?0:opts.yPos
//   console.log(xPos)
// }
function paintShape({shape:Shape,xPos:number=0,yPos=0}:PaintOptions){
  console.log(Shape),number 
}
const shape:Shape={}
paintShape({shape})
paintShape({shape,xPos:100})
paintShape({shape,yPos:100,xPos:200})

interface SomeType{
  readonly prop:string
}
function doSomething(obj:SomeType){
  console.log(obj.prop)
}

interface StringArray{
  [index:number]:string
}

const myArray:StringArray=['a','b']
const secondItem=myArray[0]

interface TestString{
  [props:string]:number
}

let testString:TestString={
  x:100,
  y:200,
  aaa:300
}

interface Animal{
  name:string
}

interface Dog extends Animal{
  [breed:number]:string
}

interface BasicAddress{
  name?:string
  street:string
  city:string
  country:string
  postalCode:string 
}

// interface AddressWithUnit{
//   name?:string
//   street:string
//   city:string
//   country:string
//   postalCode:string 
//   unit:string
// }

interface AddressWithUnit extends BasicAddress{
  unit:string
}

let awu:AddressWithUnit={
  unit:'33',
  street:'清河',
  city:'北京',
  postalCode:'1000',
  country:'中国',
  name:'ahaa'
}

interface Colorful{
  color:string
}

interface Circle{
  radius:number
}

interface ColorCircle extends Colorful,Circle{

}
const cc:ColorCircle={
  color:'red',
  radius:100
}
type ColorfulCircle=Colorful &Circle
const cnc:ColorfulCircle={
  color:'red',
  radius:100
}

function draw(circle:Colorful&Circle){

}
draw({
  color:"red",
  radius:100
})
draw({
  color:"green",
  radius:200
})

interface Box<Type>{
  contents:Type
}
interface Apple{

}
type AppleBox=Box<Apple>
let a:Apple={}
let ab:AppleBox={
  contents:a
}

