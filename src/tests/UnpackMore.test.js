import React from 'react';
import renderer from 'react-test-renderer';
import UnpackMore from '../components/presentation/UnpackMore';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const currentUser={}

  const tree = renderer.create(
  <BrowserRouter>
    <UnpackMore currentUser={currentUser}/>
  </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
