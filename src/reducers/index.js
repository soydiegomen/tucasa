import { combineReducers } from 'redux';
import selectedOperation from './Filters/selectedOperation';
import publishedHouses from './Home/publishedHouses';

export default combineReducers({
  selectedOperation,
  publishedHouses
})
