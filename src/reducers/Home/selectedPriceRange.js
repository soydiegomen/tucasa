import {
  SELECT_PRICE_RANGE,
  DEFAULT_MIN_PRICE,
  DEFAULT_MAX_PRICE
 } from '../../actions/Home/filters';

const selectedPriceRange = (state = { min : DEFAULT_MIN_PRICE, max : DEFAULT_MAX_PRICE }, action) => {
  switch (action.type) {
    case SELECT_PRICE_RANGE:
      return action.priceRange;
    default:
      return state
  }
}
export default selectedPriceRange;
