import { combineReducers } from 'redux';
import selectedOperation from './Home/selectedOperation';
import selectedProperty from './Home/selectedProperty';
import publishedHouses from './Home/publishedHouses';
import selectedKeyword from './Home/selectedKeyword';
import selectedPriceRange from './Home/selectedPriceRange';
import isActivePriceFilter from './Home/isActivePriceFilter';
import paginationParameters from './Home/paginationParameters';
import activePage from './Home/activePage';

export default combineReducers({
  selectedOperation,
  publishedHouses,
  selectedProperty,
  selectedKeyword,
  selectedPriceRange,
  isActivePriceFilter,
  paginationParameters,
  activePage
})
