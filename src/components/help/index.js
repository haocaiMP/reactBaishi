import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer'
import bgImg from '../../assets/img/help-inner-bg.jpg';
import h1Gif from '../../assets/img/h1.gif';
import h2Gif from '../../assets/img/h2.gif';
import h3Gif from '../../assets/img/h3.gif';
import h4Gif from '../../assets/img/h4.gif';
import './index.css'
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

export default class Help extends Component {
  render() {
    return (
      <div style={{position:'relative',top:'-80px',backgroundColor: '#f7f7f7'}}>
        <Header bgImg={bgImg}/>
        <div className='help_box'>
            <h2 className='hb_title'>
              <i className='iconfont icon-bangzhu'></i>
              帮助中心
            </h2>
            <div className='hb_main'>
              <div className='hm_tu'>
                <img src={h2Gif} alt=""/>
                <img src={h3Gif} alt=""/>
                <img src={h4Gif} alt=""/>
                <img src={h1Gif} alt=""/>
              </div>
              <div className='hm_con'>
                <Tabs type="card">
                  <TabPane tab="寄件/下单" key="1">Content of Tab Pane 1</TabPane>
                  <TabPane tab="查件/收件" key="2">Content of Tab Pane 2</TabPane>
                  <TabPane tab="寄前/寄后" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
              </div>
            </div>
        </div>
        <Footer />
      </div>
    )
  }
}
