import { createSelector } from 'reselect';

const getAlbums = (state) => state.albums;
const getStatus = (state) => state.status;
const getSearchTerm = (state) => state.searchTerm;

export const albumsSelector = createSelector(
    getAlbums,
    albums => albums.toJS()
);

export const statusSelector = createSelector(
    getStatus,
    status => status
);

export const searchTermSelector = createSelector(
    getSearchTerm,
    searchTerm => searchTerm
);
