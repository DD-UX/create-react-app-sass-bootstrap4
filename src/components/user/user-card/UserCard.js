import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserCard.css';

function stateProps (state) {
  return {}
}

class UserCard extends Component {
  render() {
    let user = this.props.user;
    let fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;

    return (
      <div className={`${this.props.className} card text-capitalize`}>
        <img className="card-img-top" src={user.picture.large} alt="Card" />
        <div className="card-body">
          <h4 className="card-title">{fullName}</h4>
          <dl className="card-text">
            <dt>Email:</dt>
            <dd className="text-lowercase">{user.email}</dd>
            <dt>Gender:</dt>
            <dd>{user.gender}</dd>
            <dt>Born in:</dt>
            <dd>{user.country}</dd>
            <dt>Lives in:</dt>
            <dd>
              {user.location.street} - {user.location.postcode}<br />
              {user.location.city}, {user.location.state}
            </dd>
          </dl>
        </div>
      </div>
    );
  }
}

UserCard = connect(stateProps)(UserCard);

export default UserCard;
