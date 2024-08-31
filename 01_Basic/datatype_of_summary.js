// Primitive datatype 

// 7 type's : string,  number, boolean, null, undefind, bigInt, symbol,

const score = 100;
const scoreValue = 100.3;

const IsLoggendIn = false;
const OutSideTemp = null;
let userEmail;

const Id = Symbol('123');
const anotherId = Symbol('123')

console.log(Id === anotherId);

const bigNumber = 123232435n;

console.log(typeof OutSideTemp);

 
// Refersnce type (Non Primitive)

// Array, Object, Funcation

const heros = ["saktiman", "nagraj", "dogo"];

let myObj ={
    name : "sumdrf",
    age : 23,
}

let myFunction = function(){
    console.log("heelo wored");
}