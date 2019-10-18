import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../actions/ActionConstants';
import { EventEmitter } from 'events';

let _links = [];

class LinkStore extends EventEmitter {

    constructor(props) {
        super(props);
        AppDispatcher.register(action => {
            switch (action.actionType) {
                case ActionTypes.RECEIVE_LINKS:
                    _links = action.links;
                    this.emit('change');
                    console.log('3.links received: ', _links);
                    break;
                default:
                    console.log('action: ', action);
                    break;
            }
        })
    }

    getAllLinks() {
        return _links;
    }

}

export default new LinkStore();