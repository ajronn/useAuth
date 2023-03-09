import React from 'react';
import logo from './logo.svg';
import './App.css';

import { OnlyAuthorized, OnlyUnauthorized } from "./guards";
import { useAuth } from "./useAuth";

const App = () => {
  const { isAuthorized } = useAuth();

  return (
    <div className="App">
      <h1>isAuthorized: {isAuthorized ? 'true' : 'false'}</h1>
      <OnlyUnauthorized>
        <>Authorization pending...</>
      </OnlyUnauthorized>
      <OnlyAuthorized>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </OnlyAuthorized>
    </div>
  );
}

export default App;