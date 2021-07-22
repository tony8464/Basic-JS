const cInputEl = document.getElementById('c-input');
const fInputEl = document.getElementById('f-input');
 


function updateFinput(){
    let newTemp = parseFloat(cInputEl.value);
    fInputEl.value = parseFloat((newTemp * 1.8) + 32).toFixed(0);
    console.log(fInputEl.value)
}

function updateCinput(){
    let newTemp = parseFloat(fInputEl.value);
    cInputEl.value = parseFloat((newTemp - 32) / 1.8).toFixed(0);
    console.log(cInputEl.value)
}


cInputEl.addEventListener('keyup', updateFinput);
fInputEl.addEventListener('keyup', updateCinput);

