import { FETCH_RESULTS } from '../actions/types';

const resultsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_RESULTS:
      return {
        ...state,
        results: action.payload,
      };

    default:
      return state;
  }
};

export default resultsReducer;
