import { SET_PAGINATION_PARAMETERS } from '../../actions/';

const paginationParameters = (state =
  {
    dateNextPage: new Date,
    datePreviousPage: new Date,
    pagDirection: 'rigth'
  }, action) => {
    console.log('action.paginationParameters', action.paginationParameters);
  switch (action.type) {
    case SET_PAGINATION_PARAMETERS:
      return action.paginationParameters;
    default:
      return state
  }
}
export default paginationParameters;
