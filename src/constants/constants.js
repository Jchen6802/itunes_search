import Immutable from 'immutable';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const FETCH_SOURCE = 'https://itunes.apple.com/search';

export const INITIAL_STATE = {
    searchTerm: '',
    data: Immutable.fromJS({
        resultCount: 0
    })
};
