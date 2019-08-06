import * as ActionTypes from './ActionTypes';

export function beginApiCall() {
  return {
    type: ActionTypes.BEGIN_API_CALL
  };
}

export function apiCallFailed() {
  return {
    type: ActionTypes.API_CALL_FAILED
  };
}
