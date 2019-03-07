import React, { Component } from 'react'
import './query.css';
export default class Query extends Component {
  constructor(p) {
    super(p);
    this.state = {
      on: false
    }
  }
  onFocus = () => {
    this.area.placeholder = '';
    this.setState({
      on: true
    })
    // console.log(this.area.placeholder)
  }
  onBlur = (e) => {
    this.area.placeholder = '请输入运单号，多单号用空格分隔，最多10单';
    this.setState({
      on: false
    })
  }
  render() {
    const { on } = this.state;
    return (
      <div className='query_box'> 
        <div className='query'>
          <div className='icon_box'>
            <i className='iconfont'>&#xe67c;</i>
            查件
          </div>
          <textarea className={on ? 'textarea active1' : 'textarea'}
            placeholder='请输入运单号，多单号用空格分隔，最多10单'
            ref={area => this.area = area}
            onFocus={this.onFocus} 
            onBlur={this.onBlur}></textarea>
          <div className={on ? 'btn active2' : 'btn'}>
            <button disabled>查&nbsp;&nbsp; 询</button>
          </div>
        </div>
      </div>
    )
  }
}
