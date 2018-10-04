import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import React, { Component } from 'react';

import * as Actions from '../actions/actions';

const SearchInput = styled.input`
    max-width: 100%;
`;

export class Searchbar extends Component {

    render() {
        return <div>
            <SearchInput
                type="search"
                value={this.props.searchTerm}
                onChange={this.onChange}
                onKeyDown={this.onKeyDown}
                placeholder="Search by name"/>
            <button
                onClick={this.onClick}>
                Search
            </button>
        </div>;
    }

    onClick = (ev) => {
        this.props.fetchData(this.props.searchTerm);
    }

    onKeyDown = (ev) => {
        if (ev.key.toLowerCase() === 'enter') {
            this.props.fetchData(this.props.searchTerm);
        }
    }

    onChange = (ev) => {
        const searchTerm = ev.target.value;
        this.props.updateSearchTerm(searchTerm);
    }
}

Searchbar.propTypes = {
    fetchData: PropTypes.func.isRequired,
    searchTerm: PropTypes.string,
    updateSearchTerm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        searchTerm: state.searchTerm
    };
};

const mapActionsToProps = {
    fetchData: Actions.fetchData,
    updateSearchTerm: Actions.updateSearchTerm
};

export default connect(mapStateToProps, mapActionsToProps)(Searchbar);