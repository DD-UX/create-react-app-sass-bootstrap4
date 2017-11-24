import React, { Component } from 'react';
import User from '../user/User.js'
import UserButton from '../user/user-button/UserButton'

import logo from '../../../src/img/logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <main className="container mt-5">
          <div className="row justify-content-around">
            <div className="col-6 col-md-4">
              <User/>
              <UserButton className="mt-2 btn-block">
                Retrieve a new user
              </UserButton>
            </div>
          </div>
        </main>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      </div>
    );
  }
}
