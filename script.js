const addButton = document.getElementById('plus-one');
const minusButton = document.getElementById('minus-one');
const counterEl = document.getElementById('counter');



function checkIfCounterValueIsNaN(num){
    if (isNaN(num)){
        document.getElementById('container').classList.add('error')
        document.getElementById('NaN-error').style.visibility = ('visible')
    } else {
        document.getElementById('container').classList.remove('error')
        document.getElementById('NaN-error').style.visibility = ('hidden')
    }
}

function plusCounter() {
    let counterValue = parseFloat(counterEl.value);
    checkIfCounterValueIsNaN(counterValue);
    counterEl.value = counterValue +=1;
}
function minusCounter() {
    let counterValue = parseFloat(counterEl.value);
    checkIfCounterValueIsNaN(counterValue);
    counterEl.value = counterValue -=1;
}

//event listeners
addButton.addEventListener('click', plusCounter)
minusButton.addEventListener('click', minusCounter)