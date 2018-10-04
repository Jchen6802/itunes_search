import React from 'react';
import Immutable from 'immutable';

import * as Selectors from './selectors.js';

let state;
beforeEach(() => {
    const someAlbum1 = {name:'someAlbum1'};
    const someAlbum2 = {name:'someAlbum2'};
    state = {
        albums: Immutable.List([someAlbum1,someAlbum2]),
        status: 'someStatus',
        searchTerm: 'someSearch'
    };
});

it('selects albums as expected', () => {
    expect(Selectors.albumsSelector(state)).toEqual([
        {name:'someAlbum1'},
        {name:'someAlbum2'}
    ]);
});

it('selects status as expected', () => {
    expect(Selectors.statusSelector(state)).toEqual('someStatus');
});

it('selects the search term as expected', () => {
    expect(Selectors.searchTermSelector(state)).toEqual('someSearch');
});
