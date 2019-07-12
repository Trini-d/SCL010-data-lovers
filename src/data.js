



function filterData(data, condition){
  let result = data.filter(condition);
  return result;
 }
filterData();

 function sortData(data, sortBy, sortOrder){
   //sortOrder = "Asc", "Dsc"
  //a.name == a['name']
   if(sortOrder == "Asc"){
     function comparar(a,b){
      if(a[sortBy] > b[sortBy]){
        return 1;
      }if(a[sortBy]  < b[sortBy] ){
        return -1;
      }
      return 0
     }
    
   }
   if(sortOrder == "Dsc"){
    function comparar(a,b){
      if(a[sortBy] > b[sortBy]){
        return -1;
      }if(a[sortBy] < b[sortBy]){
        return 1;
      }
      return 0;
     }

   }
   
  return data.sort(comparar);
   
 }

sortData();

 function pokeProm(data){
   
    let promHeight = 0;
    let sumHeight = 0;
    let countHeight = 0;
   for (let i = 0; i< data.length; i++){
     let height = parseFloat(data[i].height.split(" ")[0]);
     sumHeight = sumHeight + height;
    
     countHeight = countHeight + 1;

    promHeight = (sumHeight/countHeight).toFixed(2);
    
  }
  
 
  return promHeight;
 }
pokeProm();

 function pokeMaxHeight(data){
  let pokeMaxHeight = data[0].height;
  for (let i = 0; i< data.length; i++){
    if(pokeMaxHeight < data[i].height){
      pokeMaxHeight = data[i].height;
      
       }
  }

return pokeMaxHeight;
}
pokeMaxHeight();


function pokeMinHeight(data){
  let pokeMinHeight = data[0].height;
  for (let i = 0; i< data.length; i++){
    if(pokeMinHeight > data[i].height){
      pokeMinHeight = data[i].height;
      
       }
  }

return pokeMinHeight;
}
pokeMinHeight();