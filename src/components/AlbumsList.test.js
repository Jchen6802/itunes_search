import React from 'react';
import renderer from 'react-test-renderer';

import { STATUSES } from '../constants/constants';
import { AlbumsList } from './AlbumsList.jsx';

it('will initially render nothing', () => {
    const props = {
        albums: [],
        status: STATUSES.INITIAL
    };
    const albumsList = renderer.create(
        <AlbumsList {...props}/>
    ).toJSON();

    expect(albumsList).toMatchSnapshot();
});

it('will render 0 results when there are no albums after searching', () => {
    const props = {
        albums: [],
        status: STATUSES.SEARCHED
    };
    const albumsList = renderer.create(
        <AlbumsList {...props}/>
    ).toJSON();

    expect(albumsList).toMatchSnapshot();
});

it('will render the correct result count and albums after searching', () => {
    const props = {
        albums: [{
            artistName: 'someArtist',
            collectionName: 'someAlbum',
            artworkUrl100: 'albumCoverUrl'
        }],
        status: STATUSES.SEARCHED
    };
    const albumsList = renderer.create(
        <AlbumsList {...props}/>
    ).toJSON();

    expect(albumsList).toMatchSnapshot();
});
