import { getPublishedHousesV2, getHouse } from 'services/api/Houses';

export * from './Home/filters';
export * from './HouseDetail/houseMetrics';

/*Consts*/
export const RECEIVE_PUBLISHED_HOUSES = 'RECEIVE_PUBLISHED_HOUSES';
export const RECEIVE_HOUSE = 'RECEIVE_HOUSE';

function receivePublishedHouses(json) {
  return {
    type: RECEIVE_PUBLISHED_HOUSES,
    items: json.items,
    totalItems: json.totalItems
  }
}

export const fetchPublishedHouses = function (filters) {
  return dispatch => {
    return getPublishedHousesV2(filters).then(json => {
        dispatch(receivePublishedHouses(json));
      });
  }
}

/*Get House*/
function receiveHouse(json) {
  return {
    type: RECEIVE_HOUSE,
    house: json
  }
}

export const fetchHouse = function (id) {
  return dispatch => {
    return getHouse(id).then(json => {
        dispatch(receiveHouse(json[0]));
      });
  }
}
