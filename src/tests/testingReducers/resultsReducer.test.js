import resultsReducer from '../../reducers/resultsReducer';

test('should return the initial state', () => {
  expect(resultsReducer(undefined, {})).toEqual({});
});

test('should add results to the redux store', () => {
  const previousState = {
    results: [],
    detailResult: {},
    currentUser: {},
  };
  const action = {
    type: 'FETCH_RESULTS',
    payload: ['New result no 1', 'New result no 2'],
  };
  expect(resultsReducer(previousState, action)).toEqual({
    results: ['New result no 1', 'New result no 2'],
    detailResult: {},
    currentUser: {},
  });
});
