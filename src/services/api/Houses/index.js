import apiConfig from '../../config';

//Obtienen las casas publicadas con base a ciertos filtros
export const getPublishedHouses = (filters) => {
  let propertyFiler = filters.houseProperty ? filters.houseProperty : '';
  let operationFiler = filters.houseOperation ? filters.houseOperation : '';
  return fetch(`${apiConfig.apiurl}/published-houses?max=0&min=0&operation=${operationFiler}&property=${propertyFiler}&search=`)
        .then((response) => {
            var users = response.json();
            return users;
        });
};
