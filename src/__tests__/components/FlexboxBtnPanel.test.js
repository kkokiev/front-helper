import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import FlexboxBtnPanel from '../../components/flexbox/parts/flexbox-btn-panel';

describe('FlexboxBtnPanel', () => {
  const store = createStore((store = {
    flexContainer: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      alignContent: 'flex-start',
    }
  }) => store);

  const panel = shallow(
    <Provider store={store}>
      <FlexboxBtnPanel />
    </Provider>
  );

  test('render', () => {
    expect(panel.exists()).toBe(true);
  });
});
