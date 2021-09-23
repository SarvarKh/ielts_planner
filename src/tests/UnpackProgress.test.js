import React from 'react';
import { Provider } from 'react-redux';
import renderer, { act } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import UnpackProgress from '../components/presentation/UnpackProgress';

it('renders correctly', () => {
  const results = [];
  let tree;
  act(() => {
    tree = renderer.create(
      <Provider store={store}>
        <React.StrictMode>
          <BrowserRouter>
            <UnpackProgress results={results} />
          </BrowserRouter>
        </React.StrictMode>
      </Provider>,
    ).toJSON();
  });

  expect(tree).toMatchSnapshot();
});
