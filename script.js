const api = "https://pokeapi.co/api/v2/pokemon";

const poke = document.getElementById("pokemon");
const result = document.getElementById("result");
const pokemonFound = document.getElementById("result-search");

result.addEventListener("click", search);


 function search ()
 {
     pokemonFound.innerHTML = api + "/" + poke.value; 
 }
// nunca he mandado llamar una API ni he usado por lo que por el momento aún no se como hacerlo, hasta este punto solo he aprendido lo básico de JS,
// y continuo aprendiendo
