import React, { Component } from 'react'
import Bd from './Bd';
import Product from './product';
import { Form, Button, Select } from 'antd';
import Footer from '../Footer'
import './index.css'
import Beautify from '../../assets/img/onlineSevice1.png'
import WxImg from '../../assets/img/wxxcxCreateOrder.jpg'
const ButtonGroup = Button.Group;
const { Option } = Select;
const formItemLayout = {
  labelCol: { span: 12 },
  wrapperCol: { span: 12 },
};
const style = {
  tit: {
    fontSize: '20px',
    color: '#0085ff',
    lineHeight: '30px',
    marginTop: '10px'
  },
  erweima: {
    width: '141px',
    height: '141px'
  },
  img: {
    width: '175px',
    height: '210px'
  },
  bot: {
    marginBottom: '20px',
    fontSize: '18px'
  }
}
export default class Mailing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    }
  }
  onClick = (e) => {
    let value = e.target.dataset.value;
    if(value === '1') {
      this.setState({
        active: true
      })
    } else {
      this.setState({
        active: false
      })
    }
  }
  render() {
    const { active } = this.state;
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
              <Product title='物品信息'/>
              <Button type="primary" className='sure'>确认下单</Button>
            </div>
            <div className='mb_right'>
              <div className='mr_head'>
                <ButtonGroup onClick={this.onClick}>
                  <Button type={active ? 'primary': ''} data-value='1'>国内件</Button>
                  <Button type={active ? '': 'primary'} data-value='2'>国际件</Button>
                </ButtonGroup>
                <Form.Item
                  label="始发地"
                  hasFeedback
                  className=""
                  {...formItemLayout}
                  colon={false}
                >
                  <Select defaultValue="1">
                    <Option value="1">安徽</Option>
                    <Option value="2">浙江</Option>
                    <Option value="3">北京</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="目的地"
                  hasFeedback
                  className=""
                  {...formItemLayout}
                  colon={false}
                >
                  <Select defaultValue="1">
                    <Option value="1">安徽</Option>
                    <Option value="2">浙江</Option>
                    <Option value="3">北京</Option>
                  </Select>
                </Form.Item>
                <hr style={{margin:'15px 0 15px 7px'}}/>
                <Form.Item
                  label="首重"
                  hasFeedback
                  className=""
                  {...formItemLayout}
                  colon={false}
                >
                  <div><span className='yuan'>12</span>  元/kg</div>
                </Form.Item>
                <Form.Item
                  label="续重"
                  hasFeedback
                  className=""
                  {...formItemLayout}
                  colon={false}
                >
                  <div><span className='yuan'>2</span> 元/kg</div>
                </Form.Item>
                <div style={{textAlign: 'left'}}><small>注：线上下单以官网价格为准；线下通知站点收取件，在官网价格的基础上浮动30%左右，具体的以站点收取为准。</small> </div>
              </div>
              <h3 style={style.tit}>◆ 手机寄件 ◆</h3>
              <div className='mr_middle'>
                <img style={style.erweima} src={WxImg} alt=""/>
                <div style={style.bot}>微信扫一扫</div>
                <img style={style.erweima} src={WxImg} alt=""/>
                <div style={style.bot}>支付宝扫一扫</div>
                <div>就能立即下单</div>
                <div>还能随时掌握快件状态</div>
              </div>
              <h3 style={style.tit}>◆ 其他寄件方式 ◆</h3>
              <img style={style.img} src={Beautify} alt=""/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
