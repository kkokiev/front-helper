import flexItemsReducer from '../../modules/flex-items/flex-items-reducer';
import {
  addFlexItem,
  addRandomItemHeight,
  addRandomItemWidth,
  removeRandomItemHeight,
  removeRandomItemWidth
} from '../../modules/flex-items/flex-items-actions';

describe('Flex item reducer', () => {
  let state;
  const height = 50;
  const width = 80;

  beforeEach(() => {
    state = [
      {
        id: 1,
        height,
        width
      },
      {
        id: 2,
        height,
        width
      },
      {
        id: 3,
        height,
        width
      }
    ];
  });

  test('add new item', () => {
    const action = addFlexItem();

    expect(flexItemsReducer(state, action)).toEqual([
      {
        id: 1,
        height,
        width
      },
      {
        id: 2,
        height,
        width
      },
      {
        id: 3,
        height,
        width
      },
      {
        id: 4,
        height,
        width
      }
    ]);
  });

  test('change items height', () => {
    const action = addRandomItemHeight();

    expect(flexItemsReducer(state, action)).toEqual([
      {
        id: 1,
        height: 35,
        width
      },
      {
        id: 2,
        height: 65,
        width
      },
      {
        id: 3,
        height: 35,
        width
      }
    ]);
  });

  test('change items width', () => {
    const action = addRandomItemWidth();

    expect(flexItemsReducer(state, action)).toEqual([
      {
        id: 1,
        height,
        width: 55
      },
      {
        id: 2,
        height,
        width: 55
      },
      {
        id: 3,
        height,
        width: 105
      }
    ]);
  });

  test('set items height to default', () => {
    const action = removeRandomItemHeight();
    const changedState = [
      {
        id: 1,
        height: 35,
        width
      },
      {
        id: 2,
        height: 65,
        width
      },
      {
        id: 3,
        height: 35,
        width
      }
    ];

    expect(flexItemsReducer(changedState, action)).toEqual(state);
  });

  test('set items width to default', () => {
    const action = removeRandomItemWidth();
    const changedState = [
      {
        id: 1,
        height,
        width: 55
      },
      {
        id: 2,
        height,
        width: 55
      },
      {
        id: 3,
        height,
        width: 105
      }
    ];

    expect(flexItemsReducer(changedState, action)).toEqual(state);
  });
});
