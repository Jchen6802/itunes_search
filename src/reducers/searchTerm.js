import * as Constants from '../constants/constants';

export const searchTerm = (state = Constants.INITIAL_STATE.searchTerm, action) => {
    switch (action.type) {
        case Constants.UPDATE_SEARCH_TERM:
            return state = action.value;
        default:
            return state;
    }
}
