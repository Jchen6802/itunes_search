import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import React, { Component } from 'react';
import { faSearch }  from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Actions from '../actions/actions';
import { STATUSES } from '../constants/constants';
import { searchTermSelector } from '../selectors';

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
            {this.renderButton()}
        </div>;
    }

    renderButton() {
        return <button
            onClick={this.onClick}>
            <FontAwesomeIcon
                icon={faSearch}     />
        </button>
    }

    onClick = () => {
        this.search();
    }

    onKeyDown = (ev) => {
        if (ev.key.toLowerCase() === 'enter') {
            this.search();
        }
    }

    search = () => {
        this.props.setStatus(STATUSES.SEARCHING);
        this.props.fetchData(this.props.searchTerm);
    }

    onChange = (ev) => {
        const searchTerm = ev.target.value;
        this.props.updateSearchTerm(searchTerm);
    }
}

Searchbar.propTypes = {
    fetchData: PropTypes.func.isRequired,
    setStatus: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired,
    updateSearchTerm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        searchTerm: searchTermSelector(state)
    };
};

const mapActionsToProps = {
    fetchData: Actions.fetchData,
    setStatus: Actions.setStatus,
    updateSearchTerm: Actions.updateSearchTerm,
};

export default connect(mapStateToProps, mapActionsToProps)(Searchbar);
