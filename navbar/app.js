//assign variable to element has link class and add show-link class if it
//doesnot contain and do the opposite case

const navToggle = document.querySelector(".nav-toggle");
const link = document.querySelector(".links");

navToggle.addEventListener("click", function(){
    //manually add and remove class 
    /*
    if(link.classList.contains('show-links')){
        link.classList.remove("show-links");
    } else{
        link.classList.add("show-links");
    }
    */
    link.classList.toggle("show-links");

})