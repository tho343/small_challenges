//set up date dynamicly
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();
//close link
const toggleBtn = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
toggleBtn.addEventListener("click", function(){
    const containerHeight = linkContainer.getBoundingClientRect().height;
    const linkHeight = links.getBoundingClientRect().height;
    if(containerHeight === 0){
        linkContainer.style.height = `${linkHeight}px`;
    } else{
        linkContainer.style.height = 0;
    }
})
//fixed nav bar

const navbar = document.querySelector(".nav-center");
const upButton = document.querySelector(".top-link");
window.addEventListener("scroll",function(){
   if(window.pageYOffset > navbar.getBoundingClientRect().height){
    navbar.classList.add("fixed-nav");

   } else{
    navbar.classList.remove("fixed-nav");
   }
   if(this.window.pageYOffset > 500){
    upButton.classList.add("show-link");
   }else{
    upButton.classList.remove("show-link");
   }
})

const sections = document.querySelectorAll(".scroll-link");

sections.forEach(function(section){
    section.addEventListener("click",function(e){
        
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        console.log(id);
        const element = document.getElementById(id);
        //calculate heights
        const navHeight = document.querySelector(".nav-header").getBoundingClientRect().height;
        const headerHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linkContainer.getBoundingClientRect().height;
        //get position y of any href element
        let position = element.offsetTop - navHeight;
        //if there is fixed nav bar we have to substract double 
        //the height of nav bar because when we scroll from 
        //floating bar to fixed bar we take out the height of that bar
        //from its normal float.
        const fixedNavBar = navbar.classList.contains("fixed-nav");
        if(!fixedNavBar){
            position = position - headerHeight;}
        
            //for small screen : when the links toggle involved,
        if(navHeight > 80 ){
            position = position + containerHeight;
        }
        
        window.scrollTo(
            left = 0,
            top = position    
        )
        linkContainer.style.height = 0;
    })
})