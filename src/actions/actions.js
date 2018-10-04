import axios from 'axios';

import * as Constants from '../constants/constants';

export const updateSearchTerm = (value) => {
    return {
        type: Constants.UPDATE_SEARCH_TERM,
        value
    };
}

export const fetchData = (searchTerm) => {
    return (dispatch, getState) => {
        const itunesApiUrl = `${Constants.FETCH_SOURCE}?term=${searchTerm}&entity=album&attribute=artistTerm`;

        dispatch(setAlbums(Constants.INITIAL_STATE.albums));
        return axios.get(itunesApiUrl)
            .then(response => {
                dispatch(setAlbums(response.data.results));
            }).catch( error => {
                console.log(error);
            });
    };
};

const setAlbums = (value) => {
    return {
        type: Constants.SET_ALBUMS,
        value
    }
};
