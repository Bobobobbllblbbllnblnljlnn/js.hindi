const Marbl_heros = ["thor" , "Iranman" , "spiderman"];
const dc_heros = ["superman" , "flashh" , "batman"];

// Marbl_heros.push(dc_heros);
// console.log(Marbl_heros);

// console.log(Marbl_heros);
// console.log(Marbl_heros);

// const allHero = Marbl_heros.concat(dc_heros);
// console.log(allHero);

const all_new_heros = [...Marbl_heros,...dc_heros];
// console.log(all_new_heros);

const another_array = [1, 2, 3 , [ 4, 5, 6], 7, [ 6, 7, [ 4, 5]]];
const real_onather_array = another_array.flat(Infinity);
// console.log(real_onather_array);

console.log(Array.isArray("rajeev"));
console.log(Array.from("rajeev"));
console.log(Array.from({name: "rajeev"})); // intersting 

let scor1 = 100;
let scor2 = 200;
let scor3 = 300;

console.log(Array.of(scor1, scor2, scor3));





