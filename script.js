const api = "https://pokeapi.co/api/v2/pokemon";

const poke = document.getElementById("pokemon");
const result = document.getElementById("result");
const pokemonFound = document.getElementById("result-search");

result.addEventListener("click", search);


 function search ()
 {
     pokemonFound.innerHTML = api + "/" + poke.value; 
 }
