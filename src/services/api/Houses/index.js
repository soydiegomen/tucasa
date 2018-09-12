import fetch from 'cross-fetch';
import apiConfig from '../../config';

//Obtienen las casas publicadas con base a ciertos filtros
export const getPublishedHouses = (filters) => {
  let propertyFiler = filters.houseProperty ? encodeURIComponent(filters.houseProperty) : '';
  let operationFiler = filters.houseOperation ? encodeURIComponent(filters.houseOperation) : '';
  let keywordFiler = filters.houseKeyword ? encodeURIComponent(filters.houseKeyword) : '';
  let minPrice = filters.priceValue.min;
  let maxPrice = filters.priceValue.max;
  return fetch(`${apiConfig.apiurl}/published-houses?max=${maxPrice}&min=${minPrice}&operation=${operationFiler}&property=${propertyFiler}&search=${keywordFiler}`)
        .then((response) => {
            var users = response.json();
            return users;
        });
};


export const getPublishedHousesV2 = (filters) => {
  let propertyFilter = filters.selectedProperty ? encodeURIComponent(filters.selectedProperty) : '';
  let operationFilter = filters.selectedOperation ? encodeURIComponent(filters.selectedOperation) : '';
  let keywordFiler = filters.selectedKeyword ? encodeURIComponent(filters.selectedKeyword) : '';
  let minPrice = filters.selectedPriceRange.min;
  let maxPrice = filters.selectedPriceRange.max;

  console.log('API prices', filters.selectedPriceRange)

  return fetch(`http://localhost:3000/api/published-houses?min=${minPrice}&max=${maxPrice}&operation=${operationFilter}&property=${propertyFilter}&search=${keywordFiler}`)
    .then(response => response.json());
};
