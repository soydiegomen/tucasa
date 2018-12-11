import fetch from 'cross-fetch';
import apiConfig from 'services/config';

export const getHouseMetrics = (id) => {

  return fetch(`${apiConfig.apiurl}/house-metrics?houseId=${id}`)
    .then(response => response.json());
};

export const addMetric = (houseId, type) => {

  if(type !== 'views' && type !== 'likes'){
    //TODO: Send email to de admin for notify invalid case
    console.log('The metric type is not valid!');

    //Dont call to the service becouse is an invalid case
    return;
  }
  return fetch(`${apiConfig.apiurl}/house-with-files/${houseId}`,
  {
    type
  }).then(response => response.json());
};
