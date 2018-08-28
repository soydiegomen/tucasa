export const selectOperation = function (operation) {
  return {
    type: 'SELECT_OPERATION',
    operation
  };
}

export function fetchSimplePosts(subreddit) {
  return dispatch => {
    return fetch(`http://localhost:3000/api/published-houses/`)
      .then(response => response.json())
      .then(json => {
        //dispatch(updatePostTime());
        //dispatch(receiveSimplePosts(subreddit, json))
      });
  }
}
