import * as Constants from '../constants/constants';

export const data = (state = Constants.INITIAL_STATE.data, action) => {
    switch (action.type) {
        case Constants.FETCH_DATA:
            return fetchData(state, action);
        default:
            return state;
    }
}

const fetchData = (state, action) => {
    return state.set('resultCount', action.value.resultCount)
        .set('results', action.value.results);
}
