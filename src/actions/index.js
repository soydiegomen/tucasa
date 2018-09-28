import fetch from 'cross-fetch';
import { getPublishedHousesV2 } from '../services/api/Houses';

export * from './Home/filters';

/*Consts*/
export const RECEIVE_SIMPLE_POSTS = 'RECEIVE_PUBLISHED_HOUSES';

function receivePublishedHouses(json) {
  return {
    type: RECEIVE_SIMPLE_POSTS,
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
