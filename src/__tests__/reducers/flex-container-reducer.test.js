import flexContainerReducer from '../../modules/flex-container/flex-container-reducer';
import { changeFlexContainerStyles } from '../../modules/flex-container/flex-container-actions';

describe('Flex container reducer', () => {
  test('style must be updated', () => {
    const state = {
      flexDirection: 'row'
    };

    const action = changeFlexContainerStyles('flex-direction', 'column');

    expect(flexContainerReducer(state, action)).toEqual({
      flexDirection: 'column'
    });
  });
});
