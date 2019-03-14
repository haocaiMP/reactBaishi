import React, { Component } from 'react'
import Header from '../Header';
import Footer from '../Footer'
import bgImg from '../../assets/img/bill-inner-bg.jpg';
import './index.css'
export default class Check extends Component {
  onFocus = () => {
    this.area.placeholder = '';
  }
  onBlur = (e) => {
    this.area.placeholder = '请输入运单号，多单号用空格分隔，最多10单';
  }
  render() {
    return (
      <div style={{position:'relative',top:'-80px',backgroundColor: '#f7f7f7'}}>
        <Header bgImg={bgImg}/>
        <div className='check_box'>
            <h2 className='cb_title'>
              <i className='iconfont icon-danjuchaxun'></i>
              查件
            </h2>
            <div className='cb_main'>
              <div className='cm_left'>
                <textarea className='cl_text' placeholder="请输入快递单号，多个单号用空格分隔。（最多一次可输入10个单号）"
                  ref={area => this.area = area}
                  onFocus={this.onFocus} 
                  onBlur={this.onBlur}></textarea>
                <button disabled className='cl_btn'>查询</button>
              </div>
              <div className='cm_right'>最后查询: <a href="javascript: void(0);">暂无</a> </div>
            </div>
        </div>
        <Footer />
      </div>
    )
  }
}

