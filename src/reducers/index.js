import { combineReducers } from 'redux';
import selectedOperation from './Home/selectedOperation';
import publishedHouses from './Home/publishedHouses';

export default combineReducers({
  selectedOperation,
  publishedHouses
})
