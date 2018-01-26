import { combineReducers } from 'redux';
import flexItemsReducer from './flex-items/flex-items-reducer';
import flexContainerReducer from './flex-container/flex-container-reducer';
import githubReducer from './github/github-reducer';
import notificationReducer from './notification/notification-reducer';

export default combineReducers({
  flexItemsReducer,
  flexContainerReducer,
  githubReducer,
  notificationReducer
});
