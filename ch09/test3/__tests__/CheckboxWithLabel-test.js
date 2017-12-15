import React from 'react';
import {shallow, mount} from 'enzyme';
import CheckboxWithLabel from '../CheckboxWithLabel';
import jsdom from 'jsdom'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

test('CheckboxWithLabel changes the text after click', () => {
  const checkbox = mount(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});
