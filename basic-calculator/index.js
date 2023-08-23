const buttons = document.querySelectorAll('button');
const inputFeild = document.getElementById('result');

//loop through all buttons
for (let i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener('click',() => {
    const buttonValue = buttons[i].textContent;
    if(buttonValue === 'C'){
        clearResult()
    }else if(buttonValue === '='){
        calculateResult();
    } else{
       appendValue(buttonValue);
        
    }
    
});
}

// this function clears the result //
function clearResult(){
    inputFeild.value = '';
}

// this function calculates the result //
function calculateResult(){
    inputFeild.value = eval(inputFeild.value);
}

// this function displays numbers entered //
function appendValue(buttonValue){
    inputFeild.value += buttonValue;
    
};