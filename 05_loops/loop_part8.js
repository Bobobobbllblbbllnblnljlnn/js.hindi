//reduse mathed 
const mynumber = [ 1, 2, 3];
// const mytotal = mynumber.reduce(function (acc, currval) {
//     console.log(`acc ${acc} and carrval ${currval}`)
//     return acc+currval

//  },0);
const mytotal = mynumber.reduce((acc, currtvalue)=> acc+currtvalue);

//  console.log(mytotal);

 const shopinCard = [
    {
        itemName:"js course",
        price: "1000"
    },
    
    {
        itemName:"mobil dev course",
        price: "3000"
    },

    {
        itemName:"py course",
        price: "2000"
    },

    {
        itemName:"data sicence",
        price: "1000"
    },
    
 ];

const praiceToPay = shopinCard.reduce((acc, item) => acc - item.price, 0);
console.log(praiceToPay);

