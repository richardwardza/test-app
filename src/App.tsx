import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>App Env's</h1>
                <div>NODE_ENV ${process.env.NODE_ENV}</div>
                <div>All {JSON.stringify(process.env, null, 4)}</div>
            </header>
        </div>
    );
}

export default App;
