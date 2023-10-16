const btn = document.querySelector('button');
const userInput = document.getElementById('data');
const alertOutput = document.querySelector('.messaggio');
const alertSpesa = document.querySelector('.alert-danger');
let container = [];
console.log(alertSpesa);
btn.addEventListener('click' , function(){
    spesaEl = userInput.value;
    if(spesaEl.toLowerCase() === 'stop'){
        btn.classList.add('d-none');
        alertSpesa.innerText = 'Non puoi più inserire la tua spesa';
        alertSpesa.classList.remove('d-none');
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
    spesaEl = userInput.value = '';
})

