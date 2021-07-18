const addButton = document.getElementById('plus-one');
const minusButton = document.getElementById('minus-one');

const counterEl = document.getElementById('counter');
let counterValue = parseFloat(counterEl.value)


//just another way of doing the same thing:
function plusCounter() {
    counterEl.value = counterValue +=1;
}
function minusCounter() {
    counterEl.value = counterValue -=1;
}


//event listeners
addButton.addEventListener('click', plusCounter)
minusButton.addEventListener('click', minusCounter)