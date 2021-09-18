import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import MeasurementForm from '../components/presentation/MeasurementForm';

it('renders correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <MeasurementForm exam="Writing score" />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
