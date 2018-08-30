import { RECEIVE_SIMPLE_POSTS } from '../../actions';

const publishedHouses = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SIMPLE_POSTS:
      return action.publishedHouses;
    default:
      return state
  }
}
export default publishedHouses;
