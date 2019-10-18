
import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../actions/ActionConstants';

export function receiveLinks(links) {
    AppDispatcher.dispatch({
        actionType: ActionTypes.RECEIVE_LINKS,
        links
    })
}