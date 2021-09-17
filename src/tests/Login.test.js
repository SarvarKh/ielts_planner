import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../components/presentation/Login';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer.create(
  <BrowserRouter>
    <Login />
  </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
