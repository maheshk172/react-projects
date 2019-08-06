import * as ActionTypes from './ActionTypes';
import * as authorApi from '../../api/authorApi';
import { beginApiCall, apiCallFailed } from './apiStatusActions';

export function loadAuthorSuccess(loadedAuthors) {
  return {
    type: ActionTypes.LOAD_AUTHORS_SUCCESS,
    authors: loadedAuthors
  };
}

export function loadAuthors() {
  return function(dispatch) {
    //debugger;
    dispatch(beginApiCall());
    return authorApi
      .getAuthors()
      .then(authors => {
        //debugger;
        dispatch(loadAuthorSuccess(authors));
      })
      .catch(error => {
        dispatch(apiCallFailed());
        console.error(error);
        // We can also dispatch error as another dispatcher call if we want
        throw error;
      });
  };
}
