import React, { Component } from 'react';
import About from './about/About'
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
          <h1 className="App-title">Profile fetch</h1>
        </header>

        <main className="container-fluid mt-5">
          <section className="row justify-content-around text-left">
            <div className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 order-md-1">
              <User/>
              <UserButton className="mt-2 btn-block">
                <i className="fa fa-user-circle mr-2">
                  <span className="sr-only">New profile</span>
                </i>
                New profile
              </UserButton>
            </div>
            <article className="col-10 col-sm-6 col-md-8 mt-4 mt-sm-0">
              <About />
            </article>
          </section>
        </main>

      </div>
    );
  }
}
