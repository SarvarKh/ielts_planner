import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/presentation/Footer';

it('renders correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
