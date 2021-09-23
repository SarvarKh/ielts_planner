import { FETCH_CURRENT_USER } from '../actions/types';

const currentUserReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default currentUserReducer;
