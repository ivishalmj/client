/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from "react-dom";
import {render} from '@testing-library/react';
import Logo from '../Logo';

it('<Upload/> Matches Snapshot', () => {
  const component = render(<Logo/>);
  expect(component).toMatchSnapshot();
});

it("<Logo/> Renders without Crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<Logo/>, div);
  ReactDOM.unmountComponentAtNode(div);
});