

const allData = POKEMON.pokemon;
let datos = POKEMON.pokemon;



//recorrer la data
  for (let i = 0; i< datos.length; i++){


  let pokemonFrontInfo = document.createElement("div");
  pokemonFrontInfo.id = "pokeFrontInfo";
  pokemonFrontInfo.className = "pokeFrontCard";

  let pokemonName = document.createElement("p");
  pokemonName.textContent = datos[i].name;
//traer la imgane de cada pokemon desde la data e imprimirla en la carta
  let pokemonImagen = document.createElement("img");
  pokemonImagen.src = datos[i].img;
  pokemonImagen.className = "pokeImagen";
//traer el id de cada pokemon desde la data e imprimirlo en la carta
  let pokemonId = document.createElement("p");
  pokemonId.textContent = "# "+ datos[i].id;

  
  pokemonFrontInfo.appendChild(pokemonName);
  pokemonFrontInfo.appendChild(pokemonImagen);
  pokemonFrontInfo.appendChild(pokemonId);

  document.getElementById("pokemon-container").appendChild(pokemonFrontInfo).innerHTML;


  }

function cardInfo(datos){
 //vaciar el contenedor de los elementos para que pueda recibir la nueva data 
  document.getElementById("pokemon-container").innerHTML = "";
  for (let i = 0; i< datos.length; i++){

    let pokemonFrontInfo = document.createElement("div");
    pokemonFrontInfo.id = "pokeFrontInfo";
    pokemonFrontInfo.className = "pokeCard";
  
    let pokemonName = document.createElement("p");
    pokemonName.textContent = datos[i].name;
//traer la imagen de cada pokemon a la pokecarta  
    let pokemonImagen = document.createElement("img");
    pokemonImagen.src = datos[i].img;
    pokemonImagen.className = "pokeImagen";
//traer el id de cada pokemon a la pokecarta  
    let pokemonId = document.createElement("p");
    pokemonId.textContent = "# "+ datos[i].id;
  
    pokemonFrontInfo.appendChild(pokemonName);
    pokemonFrontInfo.appendChild(pokemonImagen);
    pokemonFrontInfo.appendChild(pokemonId);
  
    document.getElementById("pokemon-container").appendChild(pokemonFrontInfo).innerHTML;

    
  }
  

  
 
  
}


/*window.cardInfo = cardInfo;*/


//DOM FUNCIÓN FILTRAR





document.getElementById("test-button").addEventListener("click", ()=>{
  document.getElementById("pokemon-container").value = cardInfo(allData);
  

});



document.getElementById("candies").addEventListener("change",() => {
 let tipoFilter = document.getElementById("candies").value;
 const condition = (pokemon => pokemon.egg == tipoFilter);
 datos = filterData(allData, condition);

 cardInfo(datos);

})


document.getElementById("candies").addEventListener("change",() => {
  let tipoFilter = document.getElementById("candies").value;
  const condition = (pokemon => pokemon.egg == tipoFilter);
  datos = filterData(allData, condition);
  cardInfo(datos);
})



document.getElementById("first-evolution").addEventListener("click", ()=>{
  const condition = (pokemon => pokemon.next_evolution && !pokemon.prev_evolution);
  datos = filterData(allData, condition);
  const pokeMaxHeight = window.pokeMaxHeight(datos);
  document.getElementById("pokeMaxHeight").innerHTML = "El Pokemon mas alto es " + window.pokeMaxHeight(datos);
  const pokeProm = window.pokeProm(datos);
  document.getElementById("pokeProm").innerHTML = "El promedio de altura de los Pokemones es " + window.pokeProm(datos);
  const pokeMinHeight = window.pokeMinHeight(datos);
  document.getElementById("pokeMinHeight").innerHTML = "El Pokemon mas bajo es " + window.pokeMinHeight(datos);
  cardInfo(datos)
});

document.getElementById("second-evolution").addEventListener("click", ()=>{
  const condition = (pokemon => pokemon.prev_evolution && pokemon.prev_evolution.length == 1);
  datos = filterData(allData, condition);
  const pokeMaxHeight = window.pokeMaxHeight(datos);
  document.getElementById("pokeMaxHeight").innerHTML = "El Pokemon mas alto es " + window.pokeMaxHeight(datos);
  const pokeProm = window.pokeProm(datos);
  document.getElementById("pokeProm").innerHTML = "El promedio de altura de los Pokemones es " + window.pokeProm(datos);
  const pokeMinHeight = window.pokeMinHeight(datos);
  document.getElementById("pokeMinHeight").innerHTML = "El Pokemon mas bajo es " + window.pokeMinHeight(datos);
  cardInfo(datos)
 
});

document.getElementById("third-evolution").addEventListener("click", ()=>{
  const condition = (pokemon => pokemon.prev_evolution && pokemon.prev_evolution.length == 2);
  datos = filterData(allData, condition);
  const pokeMaxHeight = window.pokeMaxHeight(datos);
  document.getElementById("pokeMaxHeight").innerHTML = "El Pokemon mas alto es " + window.pokeMaxHeight(datos);
  const pokeProm = window.pokeProm(datos);
  document.getElementById("pokeProm").innerHTML = "El promedio de altura de los Pokemones es " + window.pokeProm(datos);
  const pokeMinHeight = window.pokeMinHeight(datos);
  document.getElementById("pokeMinHeight").innerHTML = "El Pokemon mas bajo es " + window.pokeMinHeight(datos);
  cardInfo(datos)
 
});

document.getElementById("alphabet").addEventListener("change",() => {
  let order = document.getElementById("alphabet").value;
  let lastResult = sortData(datos, "name", order);
  cardInfo(lastResult)
 });
 


