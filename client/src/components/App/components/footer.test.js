import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Footer from './footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
});

it('renders footer message', () => {
  const { getByText } = render(<Footer />);
  expect(getByText('Copyright © 2019 MERN Starter')).toBeInTheDocument();
});
