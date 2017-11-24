import React, { Component } from 'react';
import './UserButton.css';

export default class User extends Component {
  render() {
    return (
      <button {...this.props} className={`${this.props.className} btn btn-primary btn__user`}>
        {this.props.children}
        <div className="btn__user__loader">
          <i class="fa fa-spinner fa-pulse fa-fw"></i>
        </div>
      </button>
    );
  }
}
