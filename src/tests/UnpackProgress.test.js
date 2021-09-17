import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import renderer from 'react-test-renderer';
import UnpackProgress from '../components/presentation/UnpackProgress';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const results=[]

  const tree = renderer.create(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <UnpackProgress results={results}/>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
