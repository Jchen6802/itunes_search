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
        return axios.get(itunesApiUrl)
            .then(response => {
                dispatch({
                    type: Constants.SET_ALBUMS,
                    value: response.data.results
                });
            }).catch( error => {
                console.log(error);
            });
    };
};
