import React from 'react';
import renderer from 'react-test-renderer';

import Album from './Album.jsx';

it('will render as expected', () => {
    const props = {
        albumName: 'someAlbum',
        albumCover: 'someAlbumCoverUrl',
        artistName: 'someArtist'
    };

    const album = renderer.create(
        <Album {...props}/>
    ).toJSON();

    expect(album).toMatchSnapshot();
});
