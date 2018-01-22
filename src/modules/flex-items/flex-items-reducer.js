import {
  ADD_FLEX_ITEM,
  ADD_RANDOM_ITEM_HEIGHT,
  ADD_RANDOM_ITEM_WIDTH,
  REMOVE_RANDOM_ITEM_HEIGHT,
  REMOVE_RANDOM_ITEM_WIDTH
} from './flex-items-actions';

const height = 50;
const width = 80;
const INITIAL_STATE = [];

for (let i = 1; i < 7; i++) {
  INITIAL_STATE.push({ id: i, height, width });
}

const flexItemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FLEX_ITEM: {
      return [
        ...state,
        { id: state.length + 1, height, width }
      ];
    }

    case ADD_RANDOM_ITEM_HEIGHT: {
      const newState = state.map(item => ({
        ...item,
        height: item.id % 2 === 0 ? height + 15 : height - 15
      }));
      return newState;
    }

    case ADD_RANDOM_ITEM_WIDTH: {
      const newState = state.map(item => ({
        ...item,
        width: item.id % 3 === 0 ? width + 25 : width - 25
      }));
      return newState;
    }

    case REMOVE_RANDOM_ITEM_HEIGHT: {
      const newState = state.map(item => ({
        ...item,
        height
      }));
      return newState;
    }

    case REMOVE_RANDOM_ITEM_WIDTH: {
      const newState = state.map(item => ({
        ...item,
        width
      }));
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default flexItemsReducer;
