import React, { Component } from 'react'
import Marks from './Marks';

export default class info extends Component {
  render() {
    console.log("Info app rendered>>>>child of App");
    return (
      <div>
        <h1>info app city is!{this.props.city}</h1>
        <Marks />
      </div>
    )
  }
}
