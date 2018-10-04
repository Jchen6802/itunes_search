import Immutable from 'immutable';

export const SET_ALBUMS = 'SET_ALBUMS';
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const FETCH_SOURCE = 'https://itunes.apple.com/search';

export const INITIAL_STATE = {
    albums: Immutable.List(),
    searchTerm: ''
};
