



function filterData(data, condition){
  let result = data.filter(condition);
  return result;
 }

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
 function computeStats(data){
   let pokeMaxHeight = data[0];
   let pokeMinHeight =  data[0];
    let promHeight = 0;
   
   for (let i = 0; i< data.length; i++){
     let height = parseFloat(data[i].height.split(" ")[0]);
  console.log(height);
  
     
     (promHeight += height)/2;
     
     console.log((promHeight += height)/2);
    /*console.log(promHeight += height);*/
    if(pokeMaxHeight.height < data[i].height){
      pokeMaxHeight = data[i];
     /* console.log(pokeMaxHeight = data[i])*/
    }
    if(pokeMinHeight.height > data[i].height){
      pokeMinHeight = data[i];
    }
  }
  prom = (promHeight/data.length).toFixed(2);

  /*console.log(prom);*/
  
  
  ans = {"maxHeight":pokeMaxHeight, "minHeight":pokeMinHeight, "prom":promHeight}
  return ans;
 }


