import React, { Component } from 'react';
import './UserInput.css';

export default class UserInput extends Component {
  render() {
    return (
      <section className="user-input">
        <input type="text" onChange={this.props.change} value={this.props.name}/>
      </section>
    );
  }
}
