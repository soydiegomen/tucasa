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

  return fetch(`${apiConfig.apiurl}/housemetric/${houseId}`,
    {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ type })
  }).then(response => response.json());
};

export const deleteMetric = (houseId, type) => {

  if(type !== 'views' && type !== 'likes'){
    //TODO: Send email to de admin for notify invalid case
    console.log('The metric type is not valid!');
    //Dont call to the service becouse is an invalid case
    return;
  }

  return fetch(`${apiConfig.apiurl}/housemetric/${houseId}`,
    {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ type })
  }).then(response => response.json());
};
