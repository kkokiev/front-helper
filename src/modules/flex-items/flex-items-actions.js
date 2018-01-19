export const ADD_FLEX_ITEM = 'ADD_FLEX_ITEM';
export const ADD_RANDOM_ITEM_HEIGHT = 'ADD_RANDOM_ITEM_HEIGHT';
export const ADD_RANDOM_ITEM_WIDTH = 'ADD_RANDOM_ITEM_WIDTH';
export const REMOVE_RANDOM_ITEM_HEIGHT = 'REMOVE_RANDOM_ITEM_HEIGHT';
export const REMOVE_RANDOM_ITEM_WIDTH = 'REMOVE_RANDOM_ITEM_WIDTH';

export function addFlexItem() {
  return {
    type: ADD_FLEX_ITEM
  };
}

export function addRandomItemHeight() {
  return {
    type: ADD_RANDOM_ITEM_HEIGHT
  };
}

export function addRandomItemWidth() {
  return {
    type: ADD_RANDOM_ITEM_WIDTH
  };
}

export function removeRandomItemHeight() {
  return {
    type: REMOVE_RANDOM_ITEM_HEIGHT
  };
}

export function removeRandomItemWidth() {
  return {
    type: REMOVE_RANDOM_ITEM_WIDTH
  };
}
