"use strict";
function loggingIdentity(arg) {
    return arg;
}
loggingIdentity([100, 200]);
function identity(arg) {
    return arg;
}
let myIdentity = identity;
class Generic {
}
let myGeneric = new Generic();
myGeneric.zeroValue = 0;
myGeneric.add = function (x, y) {
    return x + y;
};
function logging(arg) {
    return arg;
}
logging('hello');
function getProperty(obj, key) {
    return obj[key];
}
let x = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
getProperty(x, 'a');
// getProperty(x,'m')
function create(c) {
    return new c();
}
class BeeKeeper {
    constructor() {
        this.hasMask = true;
    }
}
class ZooKeeper {
    constructor() {
        this.nametag = 'Mike';
    }
}
class Animal {
    constructor() {
        this.num = 4;
    }
}
class Bee extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new BeeKeeper();
    }
}
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new ZooKeeper();
    }
}
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
createInstance(Animal).num;
let age = 90;
