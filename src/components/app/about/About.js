import React, { Component } from 'react';

import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <h2>About this project:</h2>
        <p>
          Its functionality is super simple: load the page, retrieve a random user
          from an API.
        </p>
        <p>
          Want more server-side iteraction? hit the "Retrieve a new user" button
          and check the network. That's all it does.
        </p>
        <p>
          Want to know more? Download the repo and play with its components and
          epics.
        </p>
        <dl>
          <dt>Core:</dt>
          <dd><a href="https://github.com/facebookincubator/create-react-app" target="_blank" rel="noopener noreferrer" >Create React App</a></dd>
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
      </div>
    );
  }
}
