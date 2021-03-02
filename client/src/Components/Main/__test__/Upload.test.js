
/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from "react-dom";
import {render, fireEvent,} from '@testing-library/react';
import Upload from '../Upload';

it('<Upload/> Matches Snapshot', () => {
  const component = render(<Upload/>);
  expect(component).toMatchSnapshot();
});

it("<Upload/> Renders without Crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<Upload/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Inital State open: false", () => {
  const { getByText}  = render( <Upload/>);
  const button = getByText('Upload Documents');

  fireEvent.click(button)
  expect((button).textContent).toBe('Close dashboard')

});

