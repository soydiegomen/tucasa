import fetch from 'cross-fetch';

export * from './Home/filters';

/*Consts*/
export const RECEIVE_SIMPLE_POSTS = 'RECEIVE_PUBLISHED_HOUSES';


function receivePublishedHouses(json) {
  console.log('receiveSimplePosts', json);
  return {
    type: RECEIVE_SIMPLE_POSTS,
    publishedHouses: json,
  }
}

export const fetchPublishedHouses = function (operation, property) {
  return dispatch => {
    return fetch(`http://localhost:3000/api/published-houses?operation=${operation}&property=${property}`)
      .then(response => response.json())
      .then(json => {
        dispatch(receivePublishedHouses(json));
      });
  }
}
