const addButton = document.getElementById('plus-one');
const minusButton = document.getElementById('minus-one');



function plusCounter() {
    const counterValue = document.getElementById('counter');
    counterValue1 = parseFloat(counterValue.value)
    counterValue1 +=1;
for (let i = counterValue1; i < counterValue1+1; i++){
    counterValue.value = i
}
}
//just another way of doing the same thing


function minusCounter() {
    const counterValue = document.getElementById('counter');
    counterValue1 = parseFloat(counterValue.value)
    counter.value = counterValue1 -=1;
}



//event listeners
addButton.addEventListener('click', plusCounter)
minusButton.addEventListener('click', minusCounter)