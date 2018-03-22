import apiConfig from '../config';

//Obtienen las casas publicadas con base a ciertos filtros
export const getPublishedHouses = () => {
  return fetch(`${apiConfig.url}/published-houses?max=0&min=0&operation=&property=&search=`)
        .then((response) => {
            var users = response.json();
            return users;
        });
};
