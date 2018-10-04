import React from 'react';

import * as Utils from './utils';
import Album from '../components/Album.jsx';

it('renders albums with provided components and props', () => {
    const albumsList = [
        {
            artistName: 'someArtist1',
            artworkUrl100: 'someUrl1',
            collectionName: 'someAlbum1'
        },
        {
            artistName: 'someArtist2',
            artworkUrl100: 'someUrl2',
            collectionName: 'someAlbum2'
        }
    ];
    const album1Props = {
        key: 'album-0',
        albumName: 'someAlbum1',
        albumCover: 'someUrl1',
        artistName: 'someArtist1'
    };
    const album2Props = {
        key: 'album-1',
        albumName: 'someAlbum2',
        albumCover: 'someUrl2',
        artistName: 'someArtist2'
    };

    let actual = Utils.renderAlbums(albumsList, Album);
    actual = JSON.parse(JSON.stringify(actual));
    let expected = JSON.parse(
        JSON.stringify([
            <Album {...album1Props}/>,
            <Album {...album2Props}/>
        ])
    );
    expect(actual).toEqual(expected);
});
