import React from 'react';


// ViewComponent is a minor optimization to allow for future different views of an individual album
export const renderAlbums = (albumsList, ViewComponent) => {
    let albums = [];
    albumsList.forEach((album, idx) => {
        const albumProps = {
            key: `album-${idx}`,
            albumName: album.collectionName,
            albumCover: album.artworkUrl100,
            artistName: album.artistName,
        };
        albums.push(<ViewComponent {...albumProps}/>);
    });

    return albums;
}
