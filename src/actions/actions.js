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
        return axios.get(`${Constants.FETCH_SOURCE}?term=${searchTerm}&entity=album&attribute=artistTerm`)
            .then(response => {
                dispatch({
                    type: Constants.FETCH_DATA,
                    value: response.data
                });
            }).catch( error => {
                console.log(error);
            });
    };
};
