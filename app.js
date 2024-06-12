let display = document.querySelector('#title')
let count = 0;

console.log(display.value);

let decr =document.getElementById('Decrement')
decr.addEventListener('click', ()=>{
    count--
    display.textContent = count
}) 

let reset =document.getElementById('Reset') 
reset.addEventListener('click',()=>{
    count = 0
    display.textContent = count

})

let incr =document.getElementById('Increment')
incr.addEventListener('click',()=>{
    count++
    display.textContent = count

})

