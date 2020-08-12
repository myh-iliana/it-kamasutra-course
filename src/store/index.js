import { createStore, combineReducers } from 'redux';

import dialogs from "./reducers/dialogs";
import profile from "./reducers/profile";

const rootReducer = combineReducers({
  profile: profile,
  dialogs: dialogs,
});

const store = createStore(rootReducer);

export default store;