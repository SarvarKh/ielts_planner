import React from 'react';
import renderer from 'react-test-renderer';
import Measurement from '../components/presentation/Measurement';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer.create(
  <BrowserRouter>
    <Measurement />
  </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
