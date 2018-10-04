import { searchTerm } from './searchTerm';
import * as Constants from '../constants/constants';

it('will always have an initial state', () => {
    const action = {};
    expect(searchTerm(undefined, action)).toEqual(Constants.INITIAL_STATE.searchTerm);
});

it('can set the provided searchTerm', () => {
    const state = 'oldSearchTerm';
    const action = {
        type: Constants.UPDATE_SEARCH_TERM,
        value: 'newSearchTerm'
    };
    expect(searchTerm(state, action)).toEqual('newSearchTerm');
});
