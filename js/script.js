const btn = document.querySelector('button');
const userInput = document.getElementById('data');
const alertOutput = document.querySelector('.alert');

let container = [];

btn.addEventListener('click' , function(){
    spesaEl = userInput.value;
    if(spesaEl.toLowerCase() === 'stop'){
        btn.classList.add('d-none');
        alertOutput.innerText = container;
    } else{
        container.push(spesaEl + ' ');
        for(let i = 0; i < container.length; i++){
            alertOutput.innerText = container[i];
        }
    }
    console.log(container);
    alertOutput.classList.add('alert-success');
    alertOutput.classList.remove('d-none');
})

