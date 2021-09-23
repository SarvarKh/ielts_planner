import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import SignUp from '../components/presentation/SignUp';

it('renders correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
