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
