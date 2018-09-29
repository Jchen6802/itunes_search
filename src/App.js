import './App.css';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import Albums from './components/Albums.jsx';
import * as Actions from './actions/actions';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to the iTunes searcher</h1>
                </header>
                <input
                    type="search"
                    value={this.props.searchTerm}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    placeholder="Search by name"/>
                <button
                    onClick={this.onClick}>
                    Search
                </button>
                <Albums/>
            </div>
        );
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

    onClick = (ev) => {
        this.props.fetchData(this.props.searchTerm);
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapActionsToProps = {
    fetchData: Actions.fetchData,
    updateSearchTerm: Actions.updateSearchTerm
};

export default connect(mapStateToProps, mapActionsToProps)(App);
