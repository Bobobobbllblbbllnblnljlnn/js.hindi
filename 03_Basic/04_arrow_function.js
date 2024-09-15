
// arrow funcation 

let addone = (num1 , num2) =>{
    return num1 + num2           // carlivrasers use thne return likhna padhga 
 }

console.log(addone(3 , 3));

// implisit arrow function 

const addTwo = (num1 , num2) => (num1 + num2);

console.log( addTwo(3 , 3));

const addthree = (num1 , num2) => num1 + num2
console.log(addthree(45 , 45));

const addfour = (num1,num2) => ({username: "mahera"});
console.log(addfour(1 , 47)) ;