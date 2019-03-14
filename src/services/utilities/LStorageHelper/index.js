
//Save in Local Storage a selected house
export const addLikeInLStorage = (houseId) => {
  let arrayHousesLiked = localStorage.getItem('arrayHousesLiked');

  if(!arrayHousesLiked){
    //If there is the first item in the array must initialize
    let storedArray = [];
    storedArray.push(houseId);
    localStorage.setItem('arrayHousesLiked', JSON.stringify(storedArray));
  }else{
    //Pushe the new item to the array
    let storedArray = JSON.parse(arrayHousesLiked);
    if(!isLikedHouse(houseId)){
      storedArray.push(houseId);
      localStorage.setItem('arrayHousesLiked', JSON.stringify(storedArray));
    }
  }
};

//Check if a house has be liked
export const isLikedHouse = (houseId) => {
  let arrayHousesLiked = localStorage.getItem('arrayHousesLiked');
  let result = false;
  if(!arrayHousesLiked){
    return result;
  }

  let storedArray = JSON.parse(arrayHousesLiked);

  let counter = 0
  while(counter < storedArray.length && !result){
    if(storedArray[counter] === houseId){
      result = true;
    }
    counter++;
  }

  return result;
}

export const removeLikeInLStorage = (houseId) => {
  let arrayHousesLiked = localStorage.getItem('arrayHousesLiked');
  if(arrayHousesLiked){
    let storedArray = JSON.parse(arrayHousesLiked);
    let counter = 0
    let wasRemoved = false;

    while(counter < storedArray.length && !wasRemoved){
      if(storedArray[counter] === houseId){
        storedArray.splice(counter, 1);
        localStorage.setItem('arrayHousesLiked', JSON.stringify(storedArray));
        wasRemoved = true;
      }

      counter++;
    }
  }
}
