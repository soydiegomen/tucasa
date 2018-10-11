import { SELECT_KEYWORD } from 'actions/Home/filters';

const selectedKeyword = (state = '', action) => {
  switch (action.type) {
    case SELECT_KEYWORD:
      return action.keyword;
    default:
      return state
  }
}
export default selectedKeyword;
