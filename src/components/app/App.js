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
          <h1 className="App-title">Profile fetch</h1>
        </header>

        <main className="container mt-5">
          <section className="row justify-content-around text-left">
            <article className="col-6 col-md-4">
              <h2>About this project:</h2>
              <dl>
                <dt>Core:</dt>
                <dd>Create React App</dd>
                <dt>Implemented for:</dt>
                <dd>
                  <ul>
                    <li>
                      <a href="https://redux.js.org/docs/introduction/" target="_blank" rel="noopener noreferrer" >Redux</a>
                    </li>
                    <li>
                      <a href="http://reactivex.io/" target="_blank" rel="noopener noreferrer" >ReactiveX</a>
                    </li>
                    <li>
                      <a href="https://redux-observable.js.org/docs/basics/Epics.html" target="_blank" rel="noopener noreferrer" >Redux Observable</a>
                    </li>
                    <li>
                      <a href="https://randomuser.me/" target="_blank" rel="noopener noreferrer" >Random User Generator</a>
                    </li>
                    <li>
                      <a href="https://restcountries.eu/" target="_blank" rel="noopener noreferrer" >REST Countries</a>
                    </li>
                  </ul>
                </dd>
                <dt>Styled with:</dt>
                <dd>
                  <ul>
                    <li>
                      <a href="http://sass-lang.com/" target="_blank" rel="noopener noreferrer" >Sass</a>
                    </li>
                    <li>
                      <a href="http://getbootstrap.com/" target="_blank" rel="noopener noreferrer" >Bootstrap 4 beta 2</a>
                    </li>
                    <li>
                      <a href="http://fontawesome.io/" target="_blank" rel="noopener noreferrer" >Font Awesome CDN (package way to be implemented)</a>
                    </li>
                  </ul>
                </dd>
                <dt>Source folder architecture:</dt>
                <dd>
                  <pre className="pre">
{`my-app/
    README.md
    node_modules/
    package.json
    public /
    |- index.html
    |- favicon.ico
    src /
    |- components /
    |  |- app /
    |  |    |- App.scss
    |  |    |- App.js
    |  |    |- App.test.js
    |  |    |
    |  |- user /
    |  |    |- user-card /
    |  |    |  |- UserCard.scss
    |  |    |  |- UserCard.js
    |  |    |  |- UserCard.test.js
    |  |    |  |
    |  |    |-user-button /
    |  |    |  |- UserButton.scss
    |  |    |  |- UserButton.js
    |  |    |  |- UserButton.test.js
    |  |    |- User.scss
    |  |    |- User.js
    |  |    |- User.test.js
    |- epics /
    |  |- user.epic.js
    |
    |- redux /
    |  |- modules /
    |  |  |- root.js
    |  |- configureStore.js
    |
    |- scss /
    |  |- _bootstrap-variables.scss
    |
    |- img /
    |  |- logo.svg
    |
    |- index.js`}
                  </pre>
                </dd>
              </dl>
            </article>
            <div className="col-6 col-md-4">
              <User/>
              <UserButton className="mt-2 btn-block">
                Retrieve a new user
              </UserButton>
            </div>
          </section>
        </main>

      </div>
    );
  }
}
