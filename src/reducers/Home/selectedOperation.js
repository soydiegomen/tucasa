import { SELECT_OPERATION } from '../../actions/Home/filters';

const selectedOperation = (state = '', action) => {
  switch (action.type) {
    case SELECT_OPERATION:
      return action.operation;
    default:
      return state
  }
}
export default selectedOperation;
