const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');

const firstArray = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
    ]


const secondArray = [
    1,
    2,
    3,
    4
    ]


btn.addEventListener('click', function(){

    let randomNumber;
    let x = secondArray.length;
    let y = firstArray.length;

    
    while(x !== y){
        randomNumber = getRndInteger(1, 10);
        secondArray.push(randomNumber);

    }
    console.log(firstArray);
    console.log(secondArray);

  
})



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }