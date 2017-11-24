import "rxjs";
import { ajax } from 'rxjs/observable/dom/ajax';

//getUser Epic
export const getUserEpic = action$ =>
  action$
    .ofType('GET_USER')
    .mergeMap(action =>
        ajax.getJSON('https://randomuser.me/api/')
          .map(response => ({
            type: 'GET_USER_FULFILLED',
            user: response.results[0]
          }))
    );

// user Reducer
export const userReducer = (
    state = {
      isLoading: false,
      user: {}
    },
    action
) => {
  switch (action.type) {
    case 'GET_USER':
      state.isLoading = true;

      return Object.assign({}, state);

    case 'GET_USER_FULFILLED':
      state.isLoading = false;

      return Object.assign({}, state, action);
    default:
      return state;
  }
};