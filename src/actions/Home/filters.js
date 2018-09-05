export const SELECT_OPERATION = 'SELECT_OPERATION';
export const SELECT_PROPERTY = 'SELECT_PROPERTY';

export const selectOperation = function (operation) {
  return {
    type: SELECT_OPERATION,
    operation
  };
}

export const selectProperty = function (property) {
  return {
    type: SELECT_PROPERTY,
    property
  };
}
