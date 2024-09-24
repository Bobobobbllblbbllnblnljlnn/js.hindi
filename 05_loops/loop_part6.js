const  coding = ["js", "phython", "java", "css", "html"];
//  const value = coding.forEach( (item) => {
//     //console.log(item)
//     return item
// })

// console.log(value);

 const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newmuns = mynum.filter( (num) =>{
//   return  num > 4
// })
//console.log(newmuns);

//  const newNums = [];
//  myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num);
//     }
//  })
//console.log(newNums)
const books = [
    {titel: 'Book one', genre:'Fiction', publish: 1981,
        edition: 2004},

    {titel: 'Book two', genre:'Non-fivtion', publish: 1992,
        edition: 2008},

    {titel: 'Book Three', genre:'Historty', publish: 1999,
        edition: 2007},

    {titel: 'Book For', genre:'Non-fivtion', publish: 1989,
        edition: 2010},

    {titel: 'Book five', genre:'Science', publish: 2009,
        edition: 2014},

    {titel: 'Book six', genre:'Fiction', publish: 1987,
        edition: 2010},

    {titel: 'Book seven', genre:'History', publish: 1987,
        edition: 1996},

    {titel: 'Book Eight', genre:'Science', publish: 2001,
        edition: 2016},

    {titel: 'Book nain', genre:'Fiction', publish: 1981,
        edition: 2012},

    {titel: 'Book ten', genre:'Fiction', publish: 1981,
        edition: 2013},   
];
let userBooks = books.filter((bk) => bk.genre === 'Historty')
console.log(userBooks)
console.log("ghshyg")
userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === 'Historty'
})
 console.log(userBooks);




 

