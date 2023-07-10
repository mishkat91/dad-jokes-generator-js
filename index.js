const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "buFMXlbdGm4jRC0Ib53+yQ==jXoms8AybmtuoZ0I";
const options = {
    method: "Get",
    headers:{
        "X-Api-Key": apiKey,
},
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit="


async function getJoke(){
    joke.innerText = "Updateing...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading.."
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke"
   
    jokeEl.innerText = data[0].joke;
}
btnEl.addEventListener("click", getJoke);