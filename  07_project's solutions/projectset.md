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
## project solution 3

```javascript

const clock =  document.getElementById('clock');
 

    setInterval(function(){
        let date = new Date();
        // console.log(date.toLocaleTimeString());
        clock.innerHTML= date.toLocaleTimeString();

    },1000)

```

## project Solution 4

```javascript 


let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```

## Project 5 html file 

```htmlcode

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Project 5</title>
  </head>
  <body style="background-color: #212121; color: #fff">
    <h1>Start should change the background color evry second</h1>
    <button id="start">Start!</button>
    <button id="stop">Stop!</button>
    <script src="script.js"></script>
  </body>
</html>

```

## Project 5 Solution

```javacript 

 // Generate random color
 const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  let intervalId;
  const startChnagerColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changebgColor, 1000);
    }

    function changebgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };

  const stopChnagerColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };

  document .querySelector("#start").addEventListener
   ("click", startChnagerColor);

  document.querySelector("#stop").addEventListener
  ("click", stopChnagerColor);

```

## Project 6 html file 
 
 ```htmlcode

 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Key decated project</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      table,
      th,
      td {
        border: 1px solid #e7e7e7;
      }
      .project {
        background-color: #1c1c1c;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100vh;
      }

      .color {
        color: aliceblue;
        display: flex;
        flex-direction: row;
      }
    </style>
  </head>
  <body>
    <div class="project">
      <div id="insert">
        <div class="key">Paser the key and watch magic</div>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>

 ``

 ## Project 6 Solution

 ``javascript

 const insert = document.getElementById('insert')
window.addEventListener('keydown', (e) => {
  insert.innerHTML = ` 
  <div class="color">
      <table>
<tr>
  <th>Key</th>
  <th>Keycode</th>
  <th>code</th>
</tr>
<tr>
  <td>${e.key === " " ? 'spae' : e.key}</td>
  <td>${e.keyCode}</td>
  <td>${e.code}</td>
</tr> 
</table>
</div>

  `
})

 ```