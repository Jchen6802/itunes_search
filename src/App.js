import styled from 'styled-components';
import React, { Component } from 'react';

import Header from './components/Header.jsx';
import Searchbar from './components/Searchbar.jsx';
import AlbumsList from './components/AlbumsList.jsx';
import SearchErrors from './components/SearchErrors.jsx';

export const AppContainer = styled.div`
    max-width: 1140px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;

export default class App extends Component {
    render() {
        return (
            <AppContainer className="col-4">
                <Header/>
                <Searchbar/>
                <SearchErrors/>
                <AlbumsList/>
            </AppContainer>
        );
    }
}
