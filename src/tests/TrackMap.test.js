import React from 'react';
import renderer from 'react-test-renderer';
import TrackMap from '../components/presentation/TrackMap';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const results=[]
  const clickOnDetailResult = () => (
    'Test TrackMap and logging detail result'
  );
  const tree = renderer.create(
  <BrowserRouter>
    <TrackMap results={results} clickOnDetailResult={clickOnDetailResult}/>
  </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
