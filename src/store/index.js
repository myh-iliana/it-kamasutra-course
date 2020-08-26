import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import dialogs from './reducers/dialogs';
import profile from './reducers/profile';
import users from './reducers/users';
import auth from './reducers/auth';

const rootReducer = combineReducers({
  profile,
  dialogs,
  users,
  auth,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunkMiddleware)));

export default store;
