import { SELECT_PROPERTY } from 'actions/Home/filters';

const selectedProperty = (state = '', action) => {
  switch (action.type) {
    case SELECT_PROPERTY:
      return action.property;
    default:
      return state
  }
}
export default selectedProperty;
