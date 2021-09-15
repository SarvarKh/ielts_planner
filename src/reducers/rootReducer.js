import { combineReducers } from 'redux';
import resultsReducer from './resultsReducer';
import currentUserReducer from './currentUserReducer';

const rootReducer = combineReducers({
  results: resultsReducer,
  currentUser: currentUserReducer,
});

export default rootReducer;
