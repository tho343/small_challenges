const videoContainer = document.querySelector(".video-container");
const switchBtn = document.querySelector(".switch-btn");

switchBtn.addEventListener("click",function(){
    if(switchBtn.classList.contains("slide")){
        switchBtn.classList.remove("slide");
        videoContainer.play();
    } else{
        switchBtn.classList.add("slide");
        videoContainer.pause();
    }
})
const preloader= document.querySelector(".preloader");
window.addEventListener("load",function(){
    preloader.classList.add("hide-preloader");
})