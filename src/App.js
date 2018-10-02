import './App.css';
import React, { Component } from 'react';

import Albums from './components/Albums.jsx';
import Searchbar from './components/Searchbar.jsx';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to the iTunes searcher</h1>
                </header>
                <Searchbar/>
                <Albums/>
            </div>
        );
    }
}
