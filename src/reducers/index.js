import { combineReducers } from 'redux';
import selectedOperation from './Home/selectedOperation';
import selectedProperty from './Home/selectedProperty';
import publishedHouses from './Home/publishedHouses';

export default combineReducers({
  selectedOperation,
  publishedHouses,
  selectedProperty
})
