let jokeTextEle = document.getElementById('jokeText');
let jokeBtnEle = document.getElementById('jokeBtn');
let spinnerEle = document.getElementById('spinner');

let options={
        
    method:'GET'

};

function getRandomJoke(){
    spinnerEle.classList.remove('d-none');
    jokeTextEle.classList.add("d-none");

    fetch("https://apis.ccbp.in/jokes/random",options)
    .then(function(response){
        return response.json();
    }).then(function(jsonData){
        let randomJoke = jsonData.value;
        spinnerEle.classList.add('d-none');
        jokeTextEle.classList.remove("d-none");
        jokeTextEle.textContent = randomJoke;
    });
}
jokeBtnEle.addEventListener("click",getRandomJoke);