import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/presentation/Footer';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer.create(
  <BrowserRouter>
    <Footer />
  </BrowserRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
