import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { Component} from 'react';

const AlbumCard = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid black;
    padding: 5px;
`;

const AlbumName = styled.div`
    font-size: .9em;
    font-weight: bold;
`;

const ArtistName = styled.div`
    font-size: .7em;
`;

class Album extends Component {
    render() {
        return <div className="column">
            <AlbumCard>
                <img
                    alt={this.props.albumName}
                    src={this.props.albumCover}/>
                <AlbumName>{this.props.albumName}</AlbumName>
                <ArtistName>{this.props.artistName}</ArtistName>
            </AlbumCard>
        </div>;
    }
}

Album.propTypes = {
    artistName: PropTypes.string.isRequired,
    albumCover: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
};

export default Album;
