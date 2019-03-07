import React, { Component } from 'react'
import Bd from './Bd'
import { Button } from 'antd';
import Footer from '../Footer'
import './index.css'

export default class Mailing extends Component {
  render() {
    
    return (
      <div style={{position:'relative',top:'-80px',backgroundColor: '#f7f7f7'}}>
        <div className='head_img'></div>
        <div className='mailing_box'>
          <h2 className='mb_title'>
            <i className='iconfont icon-icon-'></i>
            寄件
          </h2>
          <div className='mb_main'>
            <div className='mb_left'>
              <h3 className='ml_title'>◆ 网上寄件 ◆  <small>上门取件时间以客服电话确认为准</small>  </h3>
              <Bd title='寄件人信息'/>
              <Bd title='收件人信息' hideRequiredMark={true} address='收货地址'/>
              <Bd title='物品信息'/>
              <Button type="primary" className='sure'>确认下单</Button>
            </div>
            <div className='mb_right'></div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
