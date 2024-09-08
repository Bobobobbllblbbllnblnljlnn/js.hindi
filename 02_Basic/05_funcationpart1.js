// funcation 

function saymyName(){
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("E");
    console.log("E");
    console.log("V");
}

// saymyName();

// function addTowNumber(number1, number2){
//     console.log(number1 + number2)
// }
// // addTowNumber( 12 , 4);
// const result = addTowNumber(12,4);
// console.log("Result " , result);

function addTowNumber(num1 , num2){
    // let result = num1 + num2;
    // return result
    return  num1 +num2
}

const result = addTowNumber(3,5);
// console.log("result " , result);

function add(num1 , num2){
    return num1+num2;
}

 const  result2 = add(2,4);
//  console.log(result2);

 function add2( num1  , num2){
    let result = num1 + num2;
    return result
 }
 
const result3 = add2(4,5);
//  console.log("ressult " , result3)

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("plaese enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("rajeev"));
console.log(loginUserMessage("rajeev"));