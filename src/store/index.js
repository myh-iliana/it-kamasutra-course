import { createStore, combineReducers } from 'redux';

import dialogs from "./reducers/dialogs";
import profile from "./reducers/profile";
import users from "./reducers/users";

const rootReducer = combineReducers({
  profile: profile,
  dialogs: dialogs,
  users: users,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;