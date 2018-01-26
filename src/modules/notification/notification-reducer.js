import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from './notification-actions';

const INITIAL_STATE = { text: '', type: 'info' }; // one of 'info', 'confirm', 'warning'

const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION: {
      const { text, type } = action.payload;
      return { text, type };
    }
    case HIDE_NOTIFICATION: {
      return { ...INITIAL_STATE };
    }
    default: {
      return state;
    }
  }
};

export default notificationReducer;
