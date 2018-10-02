import { RECEIVE_PUBLISHED_HOUSES } from '../../actions';

const publishedHouses = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PUBLISHED_HOUSES:
      return action.publishedHouses;
    default:
      return state
  }
}
export default publishedHouses;
