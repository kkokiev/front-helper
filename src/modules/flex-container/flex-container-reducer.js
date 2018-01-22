import { camelCase } from 'lodash';

import {
  CHANGE_FLEX_CONTAINER_STYLES
} from './flex-container-actions';

/*
  flex-direction
  flex-wrap
  justify-content
  align-items
  align-content
*/

const INITIAL_STATE = {
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
};

const flexContainerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_FLEX_CONTAINER_STYLES: {
      const { subtitle, value } = action.payload;
      return {
        ...state,
        [camelCase(subtitle)]: value
      };
    }

    default: {
      return state;
    }
  }
};

export default flexContainerReducer;
