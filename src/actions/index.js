import {
    FETCH_RESULTS,
    FETCH_CURRENT_USER,
    POST_NEW_USER,
    POST_NEW_RESULTS,
} from './types';

const fetchResults = () => (dispatch) => {
  const abortCont = new AbortController();
  const url = 'https://dry-brushlands-93092.herokuapp.com/results';
  const token = sessionStorage.getItem('token');
  fetch(url, {
    headers: {
      Authorization: token,
    }
  })
    .then((res) => res.json())
    .then((data) => dispatch({
      type: FETCH_RESULTS,
      payload: data,
    }));

  return () => abortCont.abort();
};

export {
    fetchResults
};
