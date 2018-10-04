import axios from 'axios';

import * as Constants from '../constants/constants';

export const updateSearchTerm = (value) => {
    return {
        type: Constants.UPDATE_SEARCH_TERM,
        value
    };
}

export const setStatus = (value) => {
    return {
        type: Constants.SET_STATUS,
        value
    }
};

export const fetchData = (searchTerm) => {
    return (dispatch, getState) => {
        const itunesApiUrl = `${Constants.FETCH_SOURCE}?term=${searchTerm}&entity=album&attribute=artistTerm`;

        return axios.get(itunesApiUrl)
            .then(response => {
                dispatch(setAlbums(response.data.results));
                dispatch(setStatus(Constants.STATUSES.SEARCHED));
            }).catch( error => {
                dispatch(setStatus(Constants.STATUSES.ERROR));
            });
    };
};

const setAlbums = (value) => {
    return {
        type: Constants.SET_ALBUMS,
        value
    }
};
