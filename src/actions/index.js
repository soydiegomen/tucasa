import fetch from 'cross-fetch';
import { getPublishedHousesV2 } from '../services/api/Houses';

export * from './Home/filters';

/*Consts*/
export const RECEIVE_SIMPLE_POSTS = 'RECEIVE_PUBLISHED_HOUSES';
export const SET_PAGINATION_PARAMETERS = 'SET_PAGINATION_PARAMETERS';

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
        dispatch(setPaginationParameters(json));
      });
  }
}

function setPaginationParameters(json) {
  let datePreviousPage = new Date();
  let dateNextPage = new Date();

  //Get the date of the first item for use this in the pagination
  if( json && json.length > 0){
    let lastItem = json[(json.length-1)];
    dateNextPage = new Date(lastItem.lastModification);

    let firstItem = json[0];
    datePreviousPage = new Date(firstItem.lastModification);
  }

  const paginationParameters =
  {
    dateNextPage: dateNextPage,
    datePreviousPage: datePreviousPage,
    pagDirection: 'rigth'
  };

  return {
    type: SET_PAGINATION_PARAMETERS,
    paginationParameters
  };
}
