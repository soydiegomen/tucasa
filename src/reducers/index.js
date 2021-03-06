import { combineReducers } from 'redux';
/*Home reducers*/
import selectedOperation from './Home/selectedOperation';
import selectedProperty from './Home/selectedProperty';
import publishedHouses from './Home/publishedHouses';
import selectedKeyword from './Home/selectedKeyword';
import selectedPriceRange from './Home/selectedPriceRange';
import isActivePriceFilter from './Home/isActivePriceFilter';
import activePage from './Home/activePage';
/*House detail reducers*/
import house from './HouseDetail/house';
import houseMetrics from './HouseDetail/houseMetrics';
import isLiked from './HouseDetail/isLiked';

export default combineReducers({
  selectedOperation,
  publishedHouses,
  selectedProperty,
  selectedKeyword,
  selectedPriceRange,
  isActivePriceFilter,
  activePage,
  house,
  houseMetrics,
  isLiked
})
