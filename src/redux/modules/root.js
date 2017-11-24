// Create actions and stores
import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { getUserEpic, userReducer } from "../../epics/user.epic";

// Merge epics
export const rootEpic = combineEpics(
    getUserEpic
);

// Merge reducers
export const rootReducer = combineReducers({
  userReducer
});