import React from 'react';
import renderer from 'react-test-renderer';
import SignUp from '../components/presentation/SignUp';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer.create(
  <BrowserRouter>
    <SignUp />
  </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
