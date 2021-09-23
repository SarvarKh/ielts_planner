import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Measurement from '../components/presentation/Measurement';

it('renders correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Measurement />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
