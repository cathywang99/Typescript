function loggingIdentity<Type>(arg:Type[]):Type[] {
  return arg;
}
loggingIdentity([100,200])

function identity<Type>(arg:Type):Type{
  return arg
}
let myIdentity:<Type>(arg:Type)=>Type=identity

class Generic<NumType>{
  zeroValue:NumType
  add:(x:NumType,y:NumType)=>NumType
}

let myGeneric=new Generic<number>()
myGeneric.zeroValue=0
myGeneric.add=function(x,y){
  return x+y
}

interface Lengthwise{
  length:number
}
function logging<Type extends Lengthwise>(arg:Type):Type{
  
  return arg
}
logging('hello')

function getProperty<Type,Key extends keyof Type>(obj:Type,key:Key){
return obj[key]
}
let x={
  a:1,
  b:2,
  c:3,
  d:4
}
getProperty(x,'a')
// getProperty(x,'m')

function create<Type>(c:{new ():Type}):Type{//工厂函数：一个可以用来创建实例的函数
  return new c()
}
class BeeKeeper{
  hasMask:boolean=true
}
class ZooKeeper{
  nametag:string='Mike'
}
class Animal{
  num:number=4
}
class Bee extends Animal {
  keeper:BeeKeeper=new BeeKeeper()
}
class Lion extends Animal{
  keeper:ZooKeeper=new ZooKeeper()
}
function createInstance<A extends Animal>(c:new()=>A):A{
  return new c()
}
createInstance(Lion).keeper.nametag
createInstance(Bee).keeper.hasMask
createInstance(Animal).num

type Person={
  age:number,
  name:string,
  alive:boolean
}
type Age=Person['age']
let age:Age=90