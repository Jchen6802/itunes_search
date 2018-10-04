import { combineReducers } from 'redux';

import { albums } from './albums';
import { status } from './status';
import { searchTerm } from './searchTerm';

export default combineReducers({
    status,
    albums,
    searchTerm
});
