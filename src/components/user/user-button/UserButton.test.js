import React from 'react';
import ReactDOM from 'react-dom';
import UserButton from './UserButton';

it('renders without crashing', () => {
  const button = document.createElement('button');
  ReactDOM.render(<UserButton />, button);
});
