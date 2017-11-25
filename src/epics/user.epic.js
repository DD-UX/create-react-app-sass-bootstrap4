import "rxjs";
import { ajax } from 'rxjs/observable/dom/ajax';


const getUserCountry = user => ({type: 'GET_USER_COUNTRY', user });

// getUser Epic
export const getUserEpic = action$ =>
  action$
    .ofType('GET_USER')
    .mergeMap(action =>
        ajax.getJSON('https://randomuser.me/api/?inc=gender,name,nat,location,email,picture')
        .map(response => getUserCountry(response.results[0]))
    );

// getUserCountry Epic
export const getUserCountryEpic = action$ =>
  action$
    .ofType('GET_USER_COUNTRY')
    .mergeMap(payload =>
      ajax.getJSON(`https://restcountries.eu/rest/v2/alpha/${payload.user.nat}`)
        .map(response => {
          // Assign full name of country to the user
          payload.user.country = response.name;

          return ({
            type: 'GET_USER_FULFILLED',
            user: payload.user
          });
        })
    );

// user Reducer
export const userReducer = (
    state = {
      isLoading: false,
      user: null
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