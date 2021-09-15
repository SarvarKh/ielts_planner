import { FETCH_DETAIL_RESULT } from '../actions/types';

const detailResultReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DETAIL_RESULT:
      return {
        ...state,
        detailResult: action.payload,
      };

    default:
      return state;
  }
};

export default detailResultReducer;
