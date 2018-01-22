import { combineReducers } from 'redux';
import flexItemsReducer from './flex-items/flex-items-reducer';
import flexContainerReducer from './flex-container/flex-container-reducer';

export default combineReducers({
  flexItemsReducer,
  flexContainerReducer
});
