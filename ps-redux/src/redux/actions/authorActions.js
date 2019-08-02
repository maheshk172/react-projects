import ActionTypes from './ActionTypes';
import * as authorApi from '../../api/authorApi';

export function loadAuthorSuccess(loadedAuthors) {
  return {
    type: ActionTypes.LOAD_AUTHORS_SUCCESS,
    authors: loadedAuthors
  };
}

export function loadAuthors() {
  return function(dispatch) {
    //debugger;
    return authorApi
      .getAuthors()
      .then(authors => {
        //debugger;
        dispatch(loadAuthorSuccess(authors));
      })
      .catch(error => {
        console.error(error);
        // We can also dispatch error as another dispatcher call if we want
        throw error;
      });
  };
}
