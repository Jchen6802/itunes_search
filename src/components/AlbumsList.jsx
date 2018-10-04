import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import React, { Component } from 'react';

import Album from './Album.jsx';
import { renderAlbums } from '../utils/utils';
import { STATUSES } from '../constants/constants';
import { albumsSelector, statusSelector } from '../selectors';

const ResultsDiv = styled.div`
    margin-top: 20px;
`;

export class AlbumsList extends Component {
    render() {
        return <div>
            {this.renderResultsCount()}
            {renderAlbums(this.props.albums, Album)}
        </div>;
    }

    renderResultsCount() {
        const albumsCount = this.props.albums.length;
        return this.inSearchedState() && <ResultsDiv>
            {albumsCount} results found.
        </ResultsDiv>;
    }

    inSearchedState = () => {
        return this.props.status === STATUSES.SEARCHED;
    }
}

AlbumsList.propTypes = {
    albums: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    return {
        albums: albumsSelector(state),
        status: statusSelector(state)
    };
}

export default connect(mapStateToProps)(AlbumsList);
