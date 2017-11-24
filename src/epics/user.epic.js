import "rxjs";
import { ajax } from 'rxjs/observable/dom/ajax';

//getUser Epic
export const getUserEpic = action$ =>
  action$
    .ofType('GET_USER')
    .mergeMap(action =>
      ajax.getJSON('https://randomuser.me/api/?inc=gender,name,nat,location,email,picture')
        .mergeMap(userAction => {
          const user = userAction.results[0];

          return ajax.getJSON(`https://restcountries.eu/rest/v2/alpha/${user.nat}`)
            .map(response => {
              // Assign full name of country to the user
              user.country = response.name;

              return ({
                type: 'GET_USER_FULFILLED',
                user: user
              })
            })
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