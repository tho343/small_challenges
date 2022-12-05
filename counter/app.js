let count = 0;
let counter = document.querySelector("#count");
let buttons = document.querySelectorAll(".btn");

buttons.forEach(function (element) {
    element.addEventListener("click", function(e){
        const list = e.currentTarget.classList;
        if(list.contains('decrease')){
            count--;
        }
        else if(list.contains('increase')){
            count++;
        } else{
            count = 0;
        }
        if(count < 0){
            counter.style.color = 'red';
        } else if(count > 0){
            counter.style.color = 'green';
        } else{
            counter.style.color = 'black';
        }
        counter.textContent = count;
    })
})