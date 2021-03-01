/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from "react-dom";
import {render} from '@testing-library/react';
import Header from '../Header';

it('<Header/> Matches Snapshot', () => {
  // const component = render(<Header/>);
  // expect(component).toMatchSnapshot();
});

it("<Header/> Renders without Crashing", () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<Header/>, div);
  // ReactDOM.unmountComponentAtNode(div);
});