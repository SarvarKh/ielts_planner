import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../components/presentation/Navbar';

it('renders correctly', () => {
  const tree = renderer.create(<Navbar title="More" />).toJSON();
  expect(tree).toMatchSnapshot();
});
