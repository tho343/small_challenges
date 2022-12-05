const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const link = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function(){
    const list = link.classList;
    if(list.contains("show-sidebar")){
        list.remove("show-sidebar");
    } else{
        list.add("show-sidebar");
    }
})
closeBtn.addEventListener("click",function(){
    link.classList.remove("show-sidebar");
})