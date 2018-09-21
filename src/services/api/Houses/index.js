import fetch from 'cross-fetch';
import apiConfig from '../../config';

export const getPublishedHousesV2 = (filters) => {
  let propertyFilter = filters.selectedProperty ? encodeURIComponent(filters.selectedProperty) : '';
  let operationFilter = filters.selectedOperation ? encodeURIComponent(filters.selectedOperation) : '';
  let keywordFiler = filters.selectedKeyword ? encodeURIComponent(filters.selectedKeyword) : '';
  let minPrice = filters.selectedPriceRange.min;
  let maxPrice = filters.selectedPriceRange.max;
  let itemLastDate = filters.itemLastDate ? encodeURIComponent(filters.itemLastDate) : (new Date()).toISOString();
  let pagDirection = filters.pagDirection ? filters.pagDirection : "rigth";
  //Fecha para la página siguiente. DateForNextPage and DateForPreviousPage
  //let dateOfLastHouse = new Date(2017,4,1);
  //dateOfLastHouse = encodeURIComponent(dateOfLastHouse.toISOString());

  return fetch(`http://localhost:3000/api/published-houses?min=${minPrice}&max=${maxPrice}&operation=${operationFilter}&property=${propertyFilter}&search=${keywordFiler}&itemLastDate=${itemLastDate}&pagDirection=${pagDirection}`)
    .then(response => response.json());
};
