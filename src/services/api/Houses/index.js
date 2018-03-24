import apiConfig from '../../config';

//Obtienen las casas publicadas con base a ciertos filtros
export const getPublishedHouses = (property) => {
  let propertyFiler = property ? property : '';
  return fetch(`${apiConfig.apiurl}/published-houses?max=0&min=0&operation=&property=${propertyFiler}&search=`)
        .then((response) => {
            var users = response.json();
            return users;
        });
};
