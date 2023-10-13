const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const resultEl = document.querySelector('.alert');

const fruttaFrigo =[
    'banana',
    'mela',
    'pera',
    'ciliegia',
    'arancia',
    'mandarino',
    'cocomero',
    'limone',
    'fragola'
    ]

let pesca = 'pesca';
fruttaFrigo.push(pesca)
console.log(fruttaFrigo)

btn.addEventListener('click', function(){

    const cocomero = 'cocomero'
    let cocomeroCheck = false;
    let msg;

    for(let x = 0; x < fruttaFrigo.lenght; x++){
        if(cocomero === fruttaFrigo[x]){
            cocomeroCheck = true;   
        }else{
            cocomeroCheck = false;
        }

        if(cocomeroCheck = true){
            msg = 'Trovato! Devo solo preparare il cocktail.'
        } else{
            msg = 'Oh no, devo uscire a comprare il cocomero!'
        }
        

    }
    resultEl.classList.remove('d-none');
    resultEl.innerText(msg)
  
})
