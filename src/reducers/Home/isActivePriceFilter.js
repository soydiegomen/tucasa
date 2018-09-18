import { ACTIVATE_PRICE_FILTER } from '../../actions/Home/filters';

const isActivePriceFilter = (state = false, action) => {
  
  switch (action.type) {
    case ACTIVATE_PRICE_FILTER:
      return action.isActive;
    default:
      return state
  }
}
export default isActivePriceFilter;
