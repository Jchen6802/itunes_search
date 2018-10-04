import { connect } from 'react-redux';
import React, { Component } from 'react';
import styled from 'styled-components';

import Album from './Album.jsx';
import { getAlbums } from '../utils/utils';

const ResultsDiv = styled.div`
    margin-top: 20px;
`;

export class AlbumsList extends Component {
    render() {
        return <div>
            {this.renderResultsCount()}
            {getAlbums(this.props.albums, Album)}
        </div>;
    }

    renderResultsCount() {
        const albumsCount = this.props.albums.length;
        return albumsCount > 0 && <ResultsDiv>
            {albumsCount} results found.
        </ResultsDiv>;
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.albums.toJS()
    };
}

export default connect(mapStateToProps)(AlbumsList);
