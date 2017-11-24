import "rxjs"; // eslint-disable-next-line
import { ofType } from 'redux-observable'; // eslint-disable-next-line
import { ajax } from 'rxjs/observable/dom/ajax'; // eslint-disable-next-line
import { delay, mapTo } from 'rxjs/operators';

//getUser Epic
export const getUserEpic = action$ =>
  action$
    .ofType('GET_USER')
    .delay(1000)
    .mapTo({
      type: 'GOT_USER'
    });

// user Reducer
export const userReducer = (
    state = {
      isLoading: false
    },
    action
) => {
  switch (action.type) {
    case 'GET_USER':
      state.isLoading = true;
      console.log(state);
      return state;
    case 'GOT_USER':
      state.isLoading = false;
      console.log(state);
      return state;

    default:
      return state;
  }
};