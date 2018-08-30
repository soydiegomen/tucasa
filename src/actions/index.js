import fetch from 'cross-fetch';
/*Consts*/
export const RECEIVE_SIMPLE_POSTS = 'RECEIVE_PUBLISHED_HOUSES';
export const SELECT_OPERATION = 'SELECT_OPERATION';

export const selectOperation = function (operation) {
  return {
    type: SELECT_OPERATION,
    operation
  };
}

function receivePublishedHouses(json) {
  console.log('receiveSimplePosts', json);
  return {
    type: RECEIVE_SIMPLE_POSTS,
    //publishedHouses: json.data.children.map(child => child.data),
    publishedHouses: json,
  }
}

export const fetchPublishedHouses = function (operation) {
  return dispatch => {
    return fetch(`http://localhost:3000/api/published-houses?operation=${operation}`)
      .then(response => response.json())
      .then(json => {
        dispatch(receivePublishedHouses(json));
      });
  }
}
