import { VisibilityFilters } from '../../actions'
const selectedOperation = (state = 'Hi its me!', action) => {
  switch (action.type) {
    case 'SELECT_OPERATION':
      return action.operation
    default:
      return state
  }
}
export default selectedOperation;
