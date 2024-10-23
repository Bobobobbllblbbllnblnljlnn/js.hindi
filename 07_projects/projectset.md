# project related to DOM

## project link
[click heare] (https://github.com/Bobobobbllblbbllnblnljlnn/js.hindi.git) 

# Solution code 

## Project 1

```javascript

const buttons = document.querySelectorAll('.button');
const  body = document.querySelector('body');

buttons.forEach(function (button){
   button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'gray'){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'red'){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id;
    }
   })
});

```

## Project 2 Solution

````javascript 

const form = document.querySelector('form')

//This usecase will give you empty 
//const height = parseInt(document.querySelector('#height'));


form.addEventListener('submit', function(e){
   e.preventDefault();

   const height = parseInt(document.querySelector('#height').value);
   const Weight = parseInt(document.querySelector('#Weight').value);
   const results = document.querySelector('#results');

   if(height === ' ' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
   }else  if(Weight === ' ' || Weight < 0 || isNaN(Weight)){
    results.innerHTML = `Please give a valid height ${Weight}`;
   }else{
    const bmi = (Weight / ((height * height) / 10000)).toFixed(2);
    // show the result 
    results.innerHTML = `<span>${bmi}</span>`;
   }

});



````