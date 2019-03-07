import React, { Component } from 'react'
import FootImg from '../assets/img/footer.png'
import FootBg from '../assets/img/footerBg.jpg'
const style = {
  footer: {
    display: 'block',
    width: '100%',
    background: `url(${FootBg})`,
    height: '306px',
    position: 'relative',
  },
  img: {
    display: 'block',
    height: '306px',
    width: '990px',
    margin: '0 auto'
  }
}

export default class Footer extends Component {
  render() {
    return (
      <div style={style.footer}>
        <img src={FootImg} alt="" style={style.img}/>
      </div>
    )
  }
}

 
