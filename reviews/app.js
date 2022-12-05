// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

const image = document.getElementById("person-img");
const author = document.getElementById("author");
const  job = document.getElementById("job");
const info = document.getElementById("info");

let currentPerson =  0;

window.addEventListener("DOMContentLoaded",function(){
    showPerson();
})

const showPerson = () =>{
    image.src = reviews[currentPerson].img;
    author.textContent = reviews[currentPerson].name;
    job.textContent = reviews[currentPerson].job;
    info.textContent = reviews[currentPerson].text;
    
}
const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".prev-btn");
//next button
nextButton.addEventListener("click",function(){
    currentPerson++;
    if(currentPerson > reviews.length - 1){
        currentPerson = 0;
    }
    showPerson();
})
//previous button
prevButton.addEventListener("click", function() {
    currentPerson--;
    if(currentPerson < 0){
        currentPerson = reviews.length - 1;
    }
    showPerson();
})
//random button
const randomButton = document.querySelector(".random-btn");
randomButton.addEventListener("click", function(){
    currentPerson = Math.floor(Math.random() * reviews.length);
    console.log(currentPerson);
    showPerson();
})