import React from 'react';
import renderer from 'react-test-renderer';
import UnpackLineChart from '../components/presentation/UnpackLineChart';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const currentUser={}
  const results=[]

  const tree = renderer.create(
  <BrowserRouter>
    <UnpackLineChart currentUser={currentUser} results={results}/>
  </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
