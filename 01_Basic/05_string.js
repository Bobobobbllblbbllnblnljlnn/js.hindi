const name = "Rajeev, kashyp , mahera";
const repoCount = 50;

//console.log(name + repoCount +  " rajeev ");

// console.log(`Helo my name is ${name} and my reopcount is ${repoCount}`);

const gameName = new String(`Rajeev  kashyp mahera `);

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf(`j`));

let Newstring = gameName.substring(0, 4);
console.log(Newstring);
const anotherString = gameName.slice(1, 4);
console.log(anotherString);
const newSteringOne = "  rajeev   "
console.log(newSteringOne);
console.log(newSteringOne.trim());
const url = "hhttps:rajeev.com/tahjeyuyu20%chusdery";
console.log(url.replace(`20%` , `_`));
console.log(url.includes(`rajeev`));

console.log(gameName.split(`_ `))