import { combineReducers } from 'redux';

import { albums } from './albums.js';
import { searchTerm } from './searchTerm.js';

export default combineReducers({
    albums,
    searchTerm
});
