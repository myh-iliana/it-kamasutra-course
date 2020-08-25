import { createStore, combineReducers } from 'redux';

import dialogs from "./reducers/dialogs";
import profile from "./reducers/profile";
import users from "./reducers/users";
import auth from "./reducers/auth";

const rootReducer = combineReducers({
  profile,
  dialogs,
  users,
  auth,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;