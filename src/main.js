

const allData = POKEMON.pokemon;
let datos = POKEMON.pokemon;
 

//recorrer la data
  for (let i = 0; i< datos.length; i++){
//crear div que contendrá los elementos de la poke carta
  let pokemonInfo = document.createElement("div");
  pokemonInfo.id = "pokeInfo";
  pokemonInfo.className = "pokeCard";
//traer el nombre de cada pokemon desde la data e imprimirlo en la carta
  let pokemonName = document.createElement("p");
  pokemonName.textContent = datos[i].name;
//traer la imgane de cada pokemon desde la data e imprimirla en la carta
  let pokemonImagen = document.createElement("img");
  pokemonImagen.src = datos[i].img;
  pokemonImagen.className = "pokeImagen";
//traer el id de cada pokemon desde la data e imprimirlo en la data
  let pokemonId = document.createElement("p");
  pokemonId.textContent = datos[i].id;
//guardar el nombre, la imagen y el id de cada pokemon dentro del div "pokemonInfo"
  pokemonInfo.appendChild(pokemonName);
  pokemonInfo.appendChild(pokemonImagen);
  pokemonInfo.appendChild(pokemonId);
//imprimir la carta ("pokemonInfo") en html, en el div "pokemon-container"
  document.getElementById("pokemon-container").appendChild(pokemonInfo).innerHTML;

  
}

function cardInfo(datos){
 //vaciar el contenedor de los elementos para que pueda recibir la nueva data 
  document.getElementById("pokemon-container").innerHTML = "";
  for (let i = 0; i< datos.length; i++){
//poke carta donde se guarda la info
    let pokemonInfo = document.createElement("div");
    pokemonInfo.id = "pokeInfo";
    pokemonInfo.className = "pokeInfo";
// traer el nombre de cada pokemon a la pokecarta
    let pokemonName = document.createElement("p");
    pokemonName.textContent = datos[i].name;
//traer la imagen de cada pokemon a la pokecarta  
    let pokemonImagen = document.createElement("img");
    pokemonImagen.src = datos[i].img;
    pokemonImagen.className = "pokeImagen";
//traer el id de cada pokemon a la pokecarta  
    let pokemonId = document.createElement("p");
    pokemonId.textContent = datos[i].id;
//guardar el nombre, la imagen y el id en la pokecarta 
    pokemonInfo.appendChild(pokemonName);
    pokemonInfo.appendChild(pokemonImagen);
    pokemonInfo.appendChild(pokemonId);
//imprimir la pokecarta en html  
    document.getElementById("pokemon-container").appendChild(pokemonInfo).innerHTML;
    
  }
//calculos de promedio de la estatura de los pokemons 
  stats = computeStats(datos)
  ans =  "Promedio de altura: "+stats["prom"]+"<br>";
  ans += "Pokemon mas alto: "+stats["maxHeight"].name+" con "+stats["maxHeight"].height+"<br>"
  ans += "Pokemon mas bajo: "+stats["minHeight"].name+" con "+stats["minHeight"].height
//imprimir los calculos en html  
  document.getElementById("stats").innerHTML = ans;
}



//DOM FUNCIÓN FILTRAR



document.getElementById("candies").addEventListener("change",() => {
 let tipoFilter = document.getElementById("candies").value;
 const condition = (pokemon => pokemon.egg == tipoFilter);
 datos = filterData(allData, condition);
 cardInfo(datos);
})

document.getElementById("first-evolution").addEventListener("click", ()=>{
  const condition = (pokemon => pokemon.next_evolution && !pokemon.prev_evolution);
  datos = filterData(allData, condition);
 
  cardInfo(datos)
});

document.getElementById("second-evolution").addEventListener("click", ()=>{
  const condition = (pokemon => pokemon.prev_evolution && pokemon.prev_evolution.length == 1);
  datos = filterData(allData, condition);
 cardInfo(datos);
});

document.getElementById("third-evolution").addEventListener("click", ()=>{
  const condition = (pokemon => pokemon.prev_evolution && pokemon.prev_evolution.length == 2);
  datos = filterData(allData, condition);
 cardInfo(datos);
});

document.getElementById("alphabet").addEventListener("change",() => {
  let order = document.getElementById("alfabeto").value;
  let lastResult = sortData(datos, "name", order);
  cardInfo(lastResult)
 });

