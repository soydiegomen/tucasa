export const SELECT_OPERATION = 'SELECT_OPERATION';
export const SELECT_PROPERTY = 'SELECT_PROPERTY';
export const SELECT_KEYWORD = 'SELECT_KEYWORD';
export const SELECT_PRICE_RANGE = 'SELECT_PRICE_RANGE';
export const ACTIVATE_PRICE_FILTER = 'ACTIVE_PRICE_FILTER';
export const INCREASE_ACTIVE_PAGE = 'INCREASE_ACTIVE_PAGE';
export const DECREASE_ACTIVE_PAGE = 'DECREASE_ACTIVE_PAGE';
export const RESET_ACTIVE_PAGE = 'RESET_ACTIVE_PAGE';
export const DEFAULT_MIN_PRICE = 0;
export const DEFAULT_MAX_PRICE = 5000;
//PAGE SIE is defined in API service file also
export const GRID_PAGE_SIZE = 4;


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

export const selectPriceRange = function (priceRange) {
  return {
    type: SELECT_PRICE_RANGE,
    priceRange
  };
}

export const activatePriceFilter = function (isActive) {
  return {
    type: ACTIVATE_PRICE_FILTER,
    isActive
  };
}

export const increaseActivePage = function () {
  return {
    type: INCREASE_ACTIVE_PAGE
  };
}

export const decreaseActivePage = function () {
  return {
    type: DECREASE_ACTIVE_PAGE
  };
}

export const resetActivePage = function () {
  return {
    type: RESET_ACTIVE_PAGE
  };
}
