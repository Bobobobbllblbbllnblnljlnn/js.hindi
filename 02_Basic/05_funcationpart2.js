function calculatCartPrise( val1, val2, ...num1){
    return num1
}

console.log(calculatCartPrise(200, 300, 400, 500,));

const username = {
    username: "rajeev",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} prise is ${anyObject.price}`);
}
// handleObject(username);
handleObject({
    username:"sam",
    price: 399
})


const myNewArray = [200, 300, 4000,];

function returnSecondValue(getArray){
    return getArray[1]
}

console.log( " result ",  returnSecondValue(myNewArray));