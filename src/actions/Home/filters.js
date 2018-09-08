export const SELECT_OPERATION = 'SELECT_OPERATION';
export const SELECT_PROPERTY = 'SELECT_PROPERTY';
export const SELECT_KEYWORD = 'SELECT_KEYWORD';

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

export const selectKeyword = function (keyword) {
  return {
    type: SELECT_KEYWORD,
    keyword
  };
}
