import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserButton.css';

function stateProps (state) {
  return {
    state: state.userReducer
  }
}

class UserButton extends Component {
  getUser () {
    this.props.dispatch({
      type: 'GET_USER'
    });
  }

  render() {
    return (
      <button
          className={`${this.props.className} btn btn-primary btn__user`}
          onClick={this.getUser.bind(this)}
          disabled={this.props.state.isLoading}
          data-loading={this.props.state.isLoading}
      >
        {this.props.children}
        <div className="btn__user__loader">
          <i className="fa fa-spinner fa-pulse fa-fw">
            <span className="sr-only">Loading...</span>
          </i>
        </div>
      </button>
    );
  }
}

UserButton = connect(stateProps)(UserButton);

export default UserButton;
