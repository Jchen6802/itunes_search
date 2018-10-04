import Immutable from 'immutable';

import { albums } from './albums';
import * as Constants from '../constants/constants';

it('will always have an initial state', () => {
    const action = {};
    expect(albums(undefined, action)).toEqual(Constants.INITIAL_STATE.albums);
});

it('can set the provided albums', () => {
    const state = Immutable.List([]);
    const action = {
        type: Constants.SET_ALBUMS,
        value: Immutable.List([{name:'someAlbum'}])
    };
    expect(albums(state, action)).toEqual(Immutable.List([{name:'someAlbum'}]));
});

it('will reset the albums when searching', () => {
    const state = Immutable.List([{name:'someAlbum'}]);
    const action = {
        type: Constants.SET_STATUS,
        value: Constants.STATUSES.SEARCHING
    };
    expect(albums(state, action)).toEqual(Constants.INITIAL_STATE.albums);
});

it("won't reset the albums on any other status change", () => {
    const state = Immutable.List([{name:'someAlbum'}]);
    const action = {
        type: Constants.SET_STATUS,
        value: Constants.STATUSES.SEARCHED
    };
    expect(albums(state, action)).toEqual(state);
});
