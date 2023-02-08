const jokeContainer = document.querySelector(".joke-text");
const url ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single";
const button = document.querySelector(".btn");
const jokeGenerator = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then( data => data.json())
    .then(item => {
            jokeContainer.innerHTML = `<p>${item.joke}</p>`;
            jokeContainer.classList.add("fade");
    
        
});}
button.addEventListener("click",jokeGenerator);
