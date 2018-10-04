import Immutable from 'immutable';

import * as Constants from '../constants/constants';

export const albums = (state = Constants.INITIAL_STATE.albums, action) => {
    switch (action.type) {
        case Constants.SET_ALBUMS:
            return new Immutable.List(action.value);
        case Constants.SET_STATUS:
            return checkStatus(state, action);
        default:
            return state;
    }
}

const checkStatus = (state, action) => {
    switch (action.value) {
        case Constants.STATUSES.SEARCHING:
            return Constants.INITIAL_STATE.albums;
        default:
            return state;
    }
}
