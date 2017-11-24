import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import './User.css';

import UserCard from './user-card/UserCard';


function stateProps (state) {
  return {
    state: state.userReducer
  }
}

class User extends Component {
  render() {
    let user = this.props.state.user;
    let userCard = !_.isNull(user)
        ? <UserCard user={user} />
        : '';

    return (
      <div className={`${this.props.className}`}>
        {userCard}
      </div>
    );
  }
}

User = connect(stateProps)(User);

export default User;