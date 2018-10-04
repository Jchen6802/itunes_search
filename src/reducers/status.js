import * as Constants from '../constants/constants';

export const status = (state = Constants.INITIAL_STATE.status, action) => {
    switch (action.type) {
        case Constants.SET_STATUS:
            return state = action.value;
        default:
            return state;
    }
}
