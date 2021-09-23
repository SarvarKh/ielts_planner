import {
  FETCH_RESULTS,
  FETCH_DETAIL_RESULT,
  FETCH_CURRENT_USER,
} from './types';

const fetchResults = () => (dispatch) => {
  const abortCont = new AbortController();
  const url = 'https://dry-brushlands-93092.herokuapp.com/results';
  const token = sessionStorage.getItem('token');
  fetch(url, {
    headers: {
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .then((data) => dispatch({
      type: FETCH_RESULTS,
      payload: data,
    }));

  return () => abortCont.abort();
};

const fetchDetailResult = (resultID) => (dispatch) => {
  const abortCont = new AbortController();
  const url = `https://dry-brushlands-93092.herokuapp.com/results/${resultID}`;
  const token = sessionStorage.getItem('token');
  fetch(url, {
    headers: {
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .then((data) => dispatch({
      type: FETCH_DETAIL_RESULT,
      payload: data,
    }));

  return () => abortCont.abort();
};

const fetchCurrentUser = () => (dispatch) => {
  const abortCont = new AbortController();
  const url = 'https://dry-brushlands-93092.herokuapp.com/info';
  const token = sessionStorage.getItem('token');
  fetch(url, {
    headers: {
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .then((data) => dispatch({
      type: FETCH_CURRENT_USER,
      payload: data,
    }));

  return () => abortCont.abort();
};

export {
  fetchResults,
  fetchDetailResult,
  fetchCurrentUser,
};
