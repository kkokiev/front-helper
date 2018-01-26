export const ADD_FLEX_ITEM = 'ADD_FLEX_ITEM';
export const ADD_RANDOM_ITEM_HEIGHT = 'ADD_RANDOM_ITEM_HEIGHT';
export const ADD_RANDOM_ITEM_WIDTH = 'ADD_RANDOM_ITEM_WIDTH';
export const REMOVE_RANDOM_ITEM_HEIGHT = 'REMOVE_RANDOM_ITEM_HEIGHT';
export const REMOVE_RANDOM_ITEM_WIDTH = 'REMOVE_RANDOM_ITEM_WIDTH';

export const addFlexItem = () => ({
  type: ADD_FLEX_ITEM
});

export const addRandomItemHeight = () => ({
  type: ADD_RANDOM_ITEM_HEIGHT
});

export const addRandomItemWidth = () => ({
  type: ADD_RANDOM_ITEM_WIDTH
});

export const removeRandomItemHeight = () => ({
  type: REMOVE_RANDOM_ITEM_HEIGHT
});

export const removeRandomItemWidth = () => ({
  type: REMOVE_RANDOM_ITEM_WIDTH
});
