import React, { Component } from 'react'

export default class Title extends Component {
  render() {
    return (
      <div className='big_title'>
        <span>
          {this.props.title}
        </span>
      </div>
    )
  }
}

