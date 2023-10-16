const btn = document.querySelector('button');
const userInput = document.getElementById('data');

let container = [];

btn.addEventListener('click' , function(){
    spesaEl = userInput.value;
    if(spesaEl === 'stop'){
        btn.classList.add('d-none');
    } else{
        container.push(spesaEl);
    }
    console.log(container);
})