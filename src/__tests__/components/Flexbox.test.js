import React from 'react';
import { shallow } from 'enzyme';
import Flexbox from '../../components/main-menu/main-menu';

describe('Flexbox', () => {
  const flexbox = shallow(<Flexbox />);

  test('render', () => {
    expect(flexbox.exists()).toBe(true);
  });
});
