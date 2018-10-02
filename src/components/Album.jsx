import React, { Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DebugDiv = styled.div`
    border: 1px solid orange;
`;

class Album extends Component {
    render() {
        return <DebugDiv>
            <img
                alt={this.props.collectionName}
                src={this.props.artworkUrl100}/>
            <div>Album: {this.props.collectionName}</div>
            <div>Artist: {this.props.artistName}</div>
        </DebugDiv>;
    }
}

Album.propTypes = {
    artistName: PropTypes.string.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
};

export default Album;
