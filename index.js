const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey ="vEReyWnUbd7ZDpWnJ3GIpFVcRNMw6wYkqvQ42SkI";
const options = {
    method: "Get",
    headers: { 'X-Api-Key': apiKey
},
};
const apiURL ="https://api.api-ninjas.com/v1/jokes?limit=1";

 async function getJoke(){
    try{
    //marrim pjesen kur nuk ka internet, ne app duhet te na dali error per kete bejme try and catch
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    // kjo eshte ne fazen e pareconsole.log("clicked");
const response =  await fetch( apiURL, options); //vendosim await ne menyre  qe te ekzekutohet json
const data = await response.json();//convert from data ti json per kete del me promise

btnEl.disabled = false;
btnEl.innerText = "Tell me a joke";
/*ketu e shohim joke ne console*/
//console.log(data[0].joke);

// per ta pare joke brenda paragrafit do bejme innertex

jokeEl.innerText = data[0].joke;
}
catch (error){
    jokeEl.innerText="An error happend, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.log(error);
}
}

btnEl.addEventListener("click", getJoke);