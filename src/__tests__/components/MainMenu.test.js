import React from 'react';
import { shallow } from 'enzyme';
import MainMenu from '../../components/main-menu/main-menu';

describe('MainMenu', () => {
  const menu = shallow(<MainMenu />);

  test('render', () => {
    expect(menu.exists()).toBe(true);
  });
});
