import React, { Component } from 'react';
import './UserButton.css';

export default class User extends Component {
  render() {
    return (
      <button {...this.props} className={`${this.props.className} btn btn-primary`}>
        {this.props.children}
      </button>
    );
  }
}
