const btn = document.getElementById('button-1');
const checkBtn = document.getElementById('button-2');
const inputEl = document.getElementById('data');
const inputEl2 = document.getElementById('data-2');
const resultEl = document.querySelector('.alert');
const resultEl2 = document.querySelector('.alert-2');

const myArray = []


btn.addEventListener('click', function(){
    let userInput = inputEl.value;
    let randomNumber;
    
    for(let x = 1; x <= userInput; x++){
        randomNumber = getRndInteger(1, 100);
        console.log(randomNumber);
        myArray.push(randomNumber);

    }
    console.log(myArray);
    let msg = myArray.slice(myArray.length - 5, myArray.length);
    resultEl.classList.remove('d-none');
    resultEl.innerHTML = (msg);
    
  
});

checkBtn.addEventListener('click', function(){
    let userInput2 = inputEl2.value;
    let msg = myArray.slice(myArray.length - userInput2, myArray.length);
    resultEl2.classList.remove('d-none');
    resultEl2.innerHTML = (msg);
    
});


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }