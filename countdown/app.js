const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");
const deadline = document.querySelector(".deadline");
const futureDay = new Date(2023,0,21,00,00,0);
console.log(futureDay);
const year = futureDay.getFullYear();
const day = weekdays[futureDay.getDay()];
const date = futureDay.getDate();
const month = months[futureDay.getMonth()];
const hours = futureDay.getHours();
const minutes = futureDay.getMinutes();
const formatInput = (item) =>{
    if(item < 10){
        return `0${item}`;
    } 
    return item;
}
giveaway.textContent = `give away ends on ${day} ${date} ${month} ${year} ${formatInput(hours)}:${formatInput(minutes)}`;


function getRemainningTime() {
    /*
    1s = 1000ms
    1min = 60s
    1hr = 60mins
    1day = 24hrs
    */
    const today = new Date();
    const futureTime = futureDay.getTime();
    const todayTime = today.getTime();
    const remainningTime = futureTime - todayTime;
    console.log(remainningTime);
    
    //single unit in milliseconds
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMin = 60*1000;

    //calculate the remaining time in each unit
    let days = Math.floor(remainningTime/oneDay);
    let hours = Math.floor((remainningTime%oneDay)/oneHour);
    let mins = Math.floor((remainningTime%oneHour)/oneMin);
    let secs = Math.floor((remainningTime%oneMin)/1000);

    const date = [days,hours,mins,secs];
    
    items.forEach(function(item,index){
        item.innerHTML = formatInput(date[index]);
    })
    if(remainningTime < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired"> Sorry, this event has expired</h4>`
    }
}
//countdown

var countdown = setInterval(getRemainningTime,1000);
getRemainningTime();