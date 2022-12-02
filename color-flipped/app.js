const colors = ["green", "red","blue","pink","purple"];

const btn = document.getElementById("butn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let randomNumber = randomNum();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})
let randomNum = () => {
    return Math.floor(Math.random() *colors.length);
}

