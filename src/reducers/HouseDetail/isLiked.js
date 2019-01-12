import { SET_LIKE } from 'actions/HouseDetail/houseMetrics';

const isLiked = (state = false, action) => {

  switch (action.type) {
    case SET_LIKE:
      return action.like;
    default:
      return state
  }
}
export default isLiked;
