import Immutable from 'immutable';
import * as Constants from '../constants/constants';

export const albums = (state = Constants.INITIAL_STATE.albums, action) => {
    switch (action.type) {
        case Constants.SET_ALBUMS:
            return new Immutable.List(action.value);
        default:
            return state;
    }
}
