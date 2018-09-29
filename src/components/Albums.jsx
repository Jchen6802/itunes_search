import { connect } from 'react-redux';
import React, { Component } from 'react';

import Album from './Album.jsx';

class Albums extends Component {
    render() {
        return <div>
            {this.props.resultCount > 0 && <div>
                {this.props.resultCount} results found.
            </div>}
            {this.props.resultCount > 0 &&
                this.renderAlbums()
            }
        </div>;
    }

    renderAlbums() {
        let albums = [];
        this.props.results.forEach((album, idx) => {
            albums.push(<Album key={`album-${idx}`} album={album}/>);
        });

        return albums;
    }
}

const mapStateToProps = (state) => {
    return state.data.toJS();
}

const mapActionsToProps = {

};

export default connect(mapStateToProps, mapActionsToProps)(Albums);
