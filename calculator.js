let Num0 = 0;
let Num1 = 0;
let value = '';
let Operation;

let clickedBtn = '';
const input = document.querySelector('.calc-buttons');
const display = document.querySelector('.display');

input.addEventListener("click", function(event) {
    if (event.target.innerHTML.length == '1' ){

        clickedBtn = event.target.innerText;
        console.log('clickedBtn is:',clickedBtn, typeof clickedBtn);
    }
   else {
        clickedBtn = ''
    }
    

if (display.innerText === '0'){
    display.innerHTML = clickedBtn;
}
else {
    display.innerHTML += clickedBtn;
}

value += clickedBtn;

if (clickedBtn === '÷' || clickedBtn === 'x' || clickedBtn === '-' || clickedBtn === '+'){
    display.innerText = 0
    Num0 = parseInt(value.slice(0,-1));
    Operation = clickedBtn;
    console.log('operation =', Operation);
    value = '';
}

else if (clickedBtn === '←'){
    deleteOne();
}

console.log('value =', value);
  

function clear(){
    display.innerText = 0;
    Num0 = 0;
    Num1 = 0;
    value = ''
}

function deleteOne(){
    value = value.slice(0,-2);
    if (value === ''){display.innerText = 0}
    else{
    display.innerText = value;
    }
    
}

if (clickedBtn === 'C'){
    clear()
}

if (clickedBtn === '=' ){
    calculate();
}

function calculate(){
    Num1 = parseInt(value.slice(0, -1));

        if (Operation === '-'){
            let Result = Num0 - Num1
            display.innerText = Result;
            value = Result;
        }
        else if (Operation === '+'){
            let Result = Num0 + Num1
            display.innerText = Result;
            value = Result;
        }
        else if (Operation === 'x'){
            let Result = Num0 * Num1
            display.innerText = Result;
            value = Result;
        }
        else if (Operation === '÷'){
            let Result = Num0 / Num1
            display.innerText = Result;
            value = Result;
        }  
    }

    //console.log(Operation);
    console.log('Num0 =',Num0, typeof Num0);
    console.log('Num1 =',Num1, typeof Num1); 
    });  
