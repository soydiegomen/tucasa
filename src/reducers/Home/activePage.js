import {
  INCREASE_ACTIVE_PAGE,
  DECREASE_ACTIVE_PAGE,
  RESET_ACTIVE_PAGE
} from 'actions/Home/filters';

const activePage = (state = 0, action) => {
  switch (action.type) {
    case INCREASE_ACTIVE_PAGE:
      return (state + 1);
    case DECREASE_ACTIVE_PAGE:
      return (state - 1);
      case RESET_ACTIVE_PAGE:
        return 0;
    default:
      return state
  }
}
export default activePage;
