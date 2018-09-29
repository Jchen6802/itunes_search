import React, { Component} from 'react';
import styled from 'styled-components';

const DebugDiv = styled.div`
    border: 1px solid orange;
`;

class Album extends Component {
    render() {
        return <DebugDiv>
            {JSON.stringify(this.props)}
        </DebugDiv>;
    }
}

export default Album;
