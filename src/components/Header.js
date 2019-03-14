import React, { Component } from 'react'


export default class Header extends Component {
  render() {
    const style = {
      img: {
        width: '100%',
        height: '200px',
        background: `url(${this.props.bgImg}) center top no-repeat`
      }
    }
    return (
      <div className='check_head_img' style={style.img}></div>
    )
  }
}
