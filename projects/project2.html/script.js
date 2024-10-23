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

