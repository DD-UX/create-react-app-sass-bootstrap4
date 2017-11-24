import React, { Component } from 'react';
import { connect } from 'react-redux';

import './User.css';


function stateProps (state) {
  return {
    state: state.userReducer
  }
}

class User extends Component {
  render() {
    let user = this.props.state.user;
    return (
      <div className={`${this.props.className} card`}>
        <img className="card-img-top" src="..." alt="Card" />
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    );
  }
}

User = connect(stateProps)(User);

export default User;