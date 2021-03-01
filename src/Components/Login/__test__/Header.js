/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from "react-dom";
import {render} from '@testing-library/react';
import Header from '../Header';

it('renders correctly', () => {
  const component = render(
  <Header/>
  );
  expect(component).toMatchSnapshot();
});