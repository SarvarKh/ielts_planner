import currentUserReducer from '../../reducers/currentUserReducer';

test('should return the initial state', () => {
  expect(currentUserReducer(undefined, {})).toEqual({});
});

test('should add a current User to the redux store', () => {
  const previousState = {
    results: [],
    detailResult: {},
    currentUser: {},
  };
  const action = {
    type: 'FETCH_CURRENT_USER',
    payload: 'New user',
  };
  expect(currentUserReducer(previousState, action)).toEqual({
    results: [],
    detailResult: {},
    currentUser: 'New user',
  });
});
