import React, { Component } from 'react';
import './User.css';

export default class User extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src="..." alt="Card" />
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary">Go somewhere</button>
            </div>
        </div>
      </div>
    );
  }
}