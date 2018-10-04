import { connect } from 'react-redux';
import React, { Component } from 'react';

import Album from './Album.jsx';
import { getAlbums } from '../utils/utils';

export class AlbumsList extends Component {
    render() {
        return <div>
            {this.renderResultsCount()}
            {getAlbums(this.props.albums, Album)}
        </div>;
    }

    renderResultsCount() {
        const albumsCount = this.props.albums.length;
        return albumsCount > 0 && <div>
            {albumsCount} results found.
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.albums.toJS()
    };
}

export default connect(mapStateToProps)(AlbumsList);
