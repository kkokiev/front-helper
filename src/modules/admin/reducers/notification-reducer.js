import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from '../actions/notification-actions';

const INITIAL_STATE = { text: '', type: 'info'}

const nitificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION : {
      return { text: payload.text, type: payload.type };
    }
    case HIDE_NOTIFICATION : {
      return { ...INITIAL_STATE };
    }
    default: {
      return state;
    }
  }
};