import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import LogIn from '../components/presentation/LogIn';

it('renders correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <LogIn />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
