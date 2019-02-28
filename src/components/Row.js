import React, { Component } from 'react'
import IMGsrc from '../assets/img/lab_info.jpg'
import Videosrc from '../assets/img/video.jpg'
export default class Row extends Component {
  constructor(p) {
    super(p)
    this.state = {
      control: false
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      control: true
    },()=>{
      setTimeout(()=>{
        this.video.play();
      },0)
    })
  }
  render() {
    return (
      <div className='row'>
        <img src={IMGsrc} alt=""/>
        <video className='video' 
            poster={Videosrc} controls={this.state.control}
            ref={video => this.video = video}
            onClick={this.onClick}
            src="https://gw.alicdn.com/bao/uploaded/LB1J_NhQVXXXXb8XVXXXXXXXXXX.mp4"></video>
      </div>
    )
  }
}
