import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div style={{width:'100%',textAlgin:'center',color:'yellow',position:'absolute',zIndex:'9'}}>
        {this.props.name}
      </div>
    )
  }
}
