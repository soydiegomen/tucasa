import fetch from 'cross-fetch';

export const selectOperation = function (operation) {
  return {
    type: 'SELECT_OPERATION',
    operation
  };
}

function receivePublishedHouses(json) {
  console.log('receiveSimplePosts', json);
  return {
    type: 'RECEIVE_PUBLISHED_HOUSES',
    //publishedHouses: json.data.children.map(child => child.data),
    publishedHouses: json,
  }
}

export const fetchPublishedHouses = function () {
  return dispatch => {
    return fetch(`http://localhost:3000/api/published-houses/`)
      .then(response => response.json())
      .then(json => {
        dispatch(receivePublishedHouses(json));
      });
  }
}
