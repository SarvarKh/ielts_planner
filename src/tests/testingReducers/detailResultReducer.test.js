import detailResultReducer from '../../reducers/detailResultReducer';

test('should return the initial state', () => {
  expect(detailResultReducer(undefined, {})).toEqual({});
});

test('should add a detail result to the redux store', () => {
  const previousState = {
    results: [],
    detailResult: {},
    currentUser: {},
  };
  const action = {
    type: 'FETCH_DETAIL_RESULT',
    payload: 'New result',
  };
  expect(detailResultReducer(previousState, action)).toEqual({
    results: [],
    detailResult: 'New result',
    currentUser: {},
  });
});
