const btn = document.querySelector('button');
const userInput = document.getElementById('data');
const alertOutput = document.querySelector('.alert');

let container = [];

btn.addEventListener('click' , function(){
    spesaEl = userInput.value;
    if(spesaEl === 'stop'){
        btn.classList.add('d-none');
    } else{
        container.push(spesaEl + ' ');
    }
    console.log(container);
    for(let i = 0; i < container.length; i++){
        alertOutput.innerText = container;
    }
    alertOutput.classList.remove('d-none');
})

