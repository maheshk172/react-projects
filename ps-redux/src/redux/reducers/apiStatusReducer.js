import * as ActionTypes from '../actions/ActionTypes';
import initialState from './initialState';

const actionTypeEndsInSuccess = actionType => {
  return actionType.substring(actionType.length - 8) === '_SUCCESS';
};

export default function apiStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  switch (action.type) {
    case ActionTypes.BEGIN_API_CALL:
      return state + 1;
    case ActionTypes.API_CALL_FAILED:
      return state - 1;
    default:
      if (actionTypeEndsInSuccess(action.type)) {
        return state - 1;
      } else {
        return state;
      }
  }
}
