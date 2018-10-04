import styled from 'styled-components';
import React, { Component } from 'react';

const HeaderContainer = styled.div`
    width: 100%;
`;

const AppHeader = styled.header`
    min-height: 130px;
    padding: 15px;
`;

const AppTitle = styled.h1`
    font-size: 1.5em;
`;

export default class Header extends Component {
    render() {
        return <HeaderContainer>
            <AppHeader>
                <AppTitle>
                    Welcome to the iTunes searcher
                </AppTitle>
                <div>Search for all your favorite artists below</div>
            </AppHeader>
        </HeaderContainer>;
    }
}
