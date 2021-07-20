const cInputEl = document.getElementById('c-input');
const fInputEl = document.getElementById('f-input');


function updateInput(){
    let newTemp = parseFloat(cInputEl.value);
    fInputEl.value = newTemp * 1.8 + 32;
    console.log(fInputEl.value)
}


cInputEl.addEventListener('change', updateInput);

