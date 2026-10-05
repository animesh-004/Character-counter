let txar = document.querySelector('#txar')
let variable = document.querySelector('.variable')
let remcount = document.querySelector('.remcount')
let reset = document.querySelector('.reset')
let wdcount = document.querySelector('.wdcount')
let alrt = document.querySelector('.alert')
let prog = document.querySelector(`.progress`)
let bar = document.querySelector(`.bar`)

let count = 0;

txar.addEventListener('input', ()=>{
    variable.innerText = txar.value.length;
    remcount.innerText = txar.maxLength - variable.innerText

    txar.style.height = "auto";
    txar.style.height = `${txar.scrollHeight}px`;

    bar.style.width = `${txar.value.length}%`

    if(txar.value.length >= 80 && txar.value.length != 100){
        alrt.innerText = `Reaching the limit`
        txar.style.borderColor = "red"
    }
    else if(txar.value.length == 100){
        alrt.innerText = 'Reached the limit'
        txar.style.borderColor = "red"
    }
    else{
        alrt.innerText = ``
        txar.style.borderColor = "black"
    }
     
    let str = txar.value.trim();
    
    let words = str.split(" ").filter((word)=>{
       return word.length != 0;
    })

    wdcount.innerText = words.length;

})

reset.addEventListener('click', ()=>{
    variable.innerText = "0"
    remcount.innerText = "100"
    txar.value = ""
    wdcount.innerText = ""
    bar.style.width = "0"
    txar.style.height = "auto"
    alrt.innerText = ''
    txar.style.borderColor = "black"
    wdcount.innerText = "0"
})