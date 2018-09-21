import { CHANGE_ACTIVE_PAGE } from '../../actions/';

const activePage = (state =
  {
    itemLastDate: new Date,
    pagDirection: 'rigth'
  }, action) => {

  switch (action.type) {
    case CHANGE_ACTIVE_PAGE:
      return action.activePage;
    default:
      return state
  }
}
export default activePage;
