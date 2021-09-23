import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import UnpackMore from '../components/presentation/UnpackMore';

it('renders correctly', () => {
  const currentUser = {};

  const tree = renderer.create(
    <BrowserRouter>
      <UnpackMore currentUser={currentUser} />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
