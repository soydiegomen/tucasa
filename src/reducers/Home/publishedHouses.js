import { RECEIVE_PUBLISHED_HOUSES } from '../../actions';

const publishedHouses = (state = { items: [], totalItems: 0}, action) => {
  switch (action.type) {
    case RECEIVE_PUBLISHED_HOUSES:
      return {
        items : action.items,
        totalItems: action.totalItems
      };
    default:
      return state
  }
}
export default publishedHouses;
