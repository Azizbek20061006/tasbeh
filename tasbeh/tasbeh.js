const counter = document.getElementById("counter"),
    reset = document.getElementById("reset"),
    input = document.getElementById("monitor");

let num = 0;
counter.addEventListener('click', ()=> {
    num++;
    input.value = num;
})

reset.addEventListener('click', ()=> {
    num = 0
    input.value = num;
})