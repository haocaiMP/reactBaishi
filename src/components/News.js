import React, { Component } from 'react'
import LeftImg from '../assets/img/hl.jpg'
import MiddleImg from '../assets/img/0613v.jpg'
import RightImg from '../assets/img/p3.jpg'

const style = {
  news: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '40px'
  },
  left: {
    display: 'block',
    width: '240px',
    height: '327px',
    marginRight: '7px'
  },
  right: {
    display: 'block',
    width: '485px',
    height: '327px',
    marginRight: '0px'
  }
}
export default class News extends Component {
  render() {
    return (
      <div className='news' style={style.news}>
        <img src={LeftImg} alt="" className='left_img' style={style.left}/>
        <img src={MiddleImg} alt="" className='middle_img' style={style.left}/>
        <img src={RightImg} alt="" className='right_img' style={style.right}/>
      </div>
    )
  }
}
