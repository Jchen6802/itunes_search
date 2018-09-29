import { combineReducers } from 'redux';

import { data } from './data.js';
import { searchTerm } from './searchTerm.js';

export default combineReducers({
    data,
    searchTerm
});
