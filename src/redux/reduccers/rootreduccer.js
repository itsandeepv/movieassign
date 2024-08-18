import { combineReducers } from 'redux';
import addToFavReduccer from './addToFavReduccer';
import filterReduccer from './filterReduccer';
const rootReducer = combineReducers({
  // Add your reducers here
  favouriteData:addToFavReduccer,
  filtersData:filterReduccer,

});

export default rootReducer;