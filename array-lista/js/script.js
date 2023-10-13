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

    for(let x = 0; x < fruttaFrigo.lenght; x++){
        if(cocomero === fruttaFrigo[x]){
            resultEl.classList.remove('d-none');
            resultEl.innerText('Trovato! Devo solo preparare il cocktail.');
        }else{
            resultEl.classList.remove('d-none');
            resultEl.innerText('Oh no, devo uscire a comprare il cocomero!'); 
        }
    }

  
})
