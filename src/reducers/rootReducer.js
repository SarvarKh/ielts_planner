import { combineReducers } from 'redux';
import resultsReducer from './resultsReducer';
import currentUserReducer from './currentUserReducer';
import detailResultReducer from './detailResultReducer';

const rootReducer = combineReducers({
  results: resultsReducer,
  detailResult: detailResultReducer,
  currentUser: currentUserReducer,
});

export default rootReducer;
