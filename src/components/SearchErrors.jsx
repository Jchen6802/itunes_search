import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import React, { Component } from 'react';

import { statusSelector } from '../selectors';
import { STATUSES } from '../constants/constants';

const ErrorsContainer = styled.div`
    color: red;
    margin-top: 20px;
`;

export class SearchErrors extends Component {
    render () {
        return this.inErrorState() && <ErrorsContainer>
            Searcher encountered an error! Please try searching again.
        </ErrorsContainer>;
    }

    inErrorState = () => {
        return this.props.status === STATUSES.ERROR;
    }
}

SearchErrors.propTypes = {
    status: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    return {
        status: statusSelector(state)
    };
};

export default connect(mapStateToProps)(SearchErrors);
