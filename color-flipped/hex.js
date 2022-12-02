const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
//#f15035
const btn = document.getElementById("butn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let newColor = "#";
    for(let i=0;i < 6;i++){
        let ranNum = randomNum();
        newColor = newColor + hex[ranNum];
    }
    document.body.style.backgroundColor = newColor;
    color.textContent = newColor;

})
let randomNum = () =>{
    return Math.floor(Math.random() * hex.length);
}
