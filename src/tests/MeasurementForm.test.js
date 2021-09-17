import React from 'react';
import renderer from 'react-test-renderer';
import MeasurementForm from '../components/presentation/MeasurementForm';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer.create(
  <BrowserRouter>
    <MeasurementForm />
  </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
