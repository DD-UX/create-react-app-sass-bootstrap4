// Create actions and stores
import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { getUserEpic, getUserCountryEpic, userReducer } from "../../epics/user.epic";

// Merge epics
export const rootEpic = combineEpics(
  getUserEpic,
  getUserCountryEpic
);

// Merge reducers
export const rootReducer = combineReducers({
  userReducer
});