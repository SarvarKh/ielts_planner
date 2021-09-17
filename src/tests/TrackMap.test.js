import React from 'react';
import renderer from 'react-test-renderer';
import TrackMap from '../components/presentation/TrackMap';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const results=[]
  const tree = renderer.create(
  <BrowserRouter>
    <TrackMap results={results}/>
  </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
