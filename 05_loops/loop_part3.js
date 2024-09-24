// for of loop 
//["" , "", ""]
//[{}, {}, {}]
const arrar = [1,2,3,3,4,5,6];

for (const num  of arrar) {
}

const gratting = "hello wordi"

for (const greet of gratting) {
    //console.log(`each char is ${greet}`)
    
}

// maps 

const map = new Map();
map.set('IN', "india");
map.set('USA', "United state of india ");
map.set('Fr', "France");
console.log(map)

for (const [key , value] of map) {
    console.log(key, `:-`, value)
}

// const myobject = {
//     'game1': 'nsf',
//     'game2': 'nsf',
//     'game3': 'nsf'
// }

// for (const [key , value] of myobject) {
//    // console.log(key, ':-' , value)
// }