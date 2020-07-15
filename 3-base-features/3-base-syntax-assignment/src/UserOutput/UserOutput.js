import React, { Component } from 'react';
import './UserOutput.css';

export default class UserOutput extends Component {
  render() {
    return (
      <section className="user-output">
        <p>{this.props.username}</p>
        <p></p>
      </section>
    )
  }
}
