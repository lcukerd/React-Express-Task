import { createStore } from 'redux';
import * as actions from './actions'

const reducer = (state, action) => {
    switch (action.type) {
        case action.ADD_SURVEY:
            break;
        case action.REMOVE_SURVEY:
            break;
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;