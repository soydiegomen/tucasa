import { SELECT_PRICE_RANGE } from '../../actions/Home/filters';

const selectedPriceRange = (state = { min : 0, max : 5000 }, action) => {
  switch (action.type) {
    case SELECT_PRICE_RANGE:
      return action.priceRange;
    default:
      return state
  }
}
export default selectedPriceRange;
