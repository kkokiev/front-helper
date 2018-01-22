import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import FlexOutput from '../../components/flexbox/parts/flex-output';

describe('FlexOutput', () => {
  const store = createStore((store = {
    flexContainer: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      alignContent: 'flex-start',
    },
    flexItems: [{ id: 1, height: 50, width: 80 }]
  }) => store);

  const output = shallow(
    <Provider store={store}>
      <FlexOutput />
    </Provider>
  );

  test('render', () => {
    expect(output.exists()).toBe(true);
  });
});
