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

// ***************************************************

// stack (Primitive)  / Heap (Non Primitive);

let myyoutbname = "rajeevmahera@144";

let anothername = myyoutbname;
anothername = "rajeev@345655"
console.log(myyoutbname);
console.log(anothername);

let userOne = {
    Email: "rajeev22@gamnil.com",
    uip: "user@hylc"
}

let userTwo = userOne;

userOne.Email = "hitisch@googlel.com";
console.log(userOne.Email);
console.log(userTwo.Email);