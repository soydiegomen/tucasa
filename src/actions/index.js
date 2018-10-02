import { getPublishedHousesV2 } from '../services/api/Houses';

export * from './Home/filters';

/*Consts*/
export const RECEIVE_PUBLISHED_HOUSES = 'RECEIVE_PUBLISHED_HOUSES';

function receivePublishedHouses(json) {
  return {
    type: RECEIVE_PUBLISHED_HOUSES,
    publishedHouses: json,
  }
}

export const fetchPublishedHouses = function (filters) {
  return dispatch => {
    return getPublishedHousesV2(filters).then(json => {
        dispatch(receivePublishedHouses(json));
      });
  }
}
