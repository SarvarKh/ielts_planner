import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import UnpackLineChart from '../components/presentation/UnpackLineChart';

it('renders correctly', () => {
  const currentUser = {};
  const results = [];

  const tree = renderer.create(
    <BrowserRouter>
      <UnpackLineChart currentUser={currentUser} results={results} />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
