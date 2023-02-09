const searchBtn = document.querySelector(".search-btn");
const result = document.querySelector(".result");
const url="https://www.dictionaryapi.com/api/v3/references/collegiate/json/";
const apiKey = "?key=938eb2fc-41b9-4325-ac19-c72367d9dd48";
const sound= document.getElementById("sound");
searchBtn.addEventListener("click",function(){
    let inpWord = document.getElementById("inp-word").value;
    let urlToFetch = url+inpWord+apiKey;
    fetch(urlToFetch)
    .then(response => response.json())
    .then(item => {
        console.log(item[0]);
        result.innerHTML =`
        <div class="word">
                <h3>${inpWord}</h3>
                <button>
                    <i class="fas fa-volume-up"></i>
                </button>
            </div>
            <div class="details">
                <p>${item[0].fl}</p>
                <p>/${item[0].hwi.prs[0].mw}/</p>
            </div>
            <p class="word-meaning">${item[0].shortdef[0]}</p>
            <p class="word-example"></p>
            
        </div>
        `
    }).catch(()=>{
        result.innerHTML = `<h3 class="error-message" style="margin-top: 20px;">Counldn't Find The Word</h3>`
    });

})