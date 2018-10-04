import { createSelector } from 'reselect';

const getAlbums = (state) => state.albums;
const getSearchTerm = (state) => state.searchTerm;

export const albumsSelector = createSelector(
    getAlbums,
    albums => albums.toJS()
);

export const searchTermSelector = createSelector(
    getSearchTerm,
    searchTerm => searchTerm
);
