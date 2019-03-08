import React, { Component } from 'react'
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css'
import './bd.css'
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formItemLayoutFirst = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
class Bd extends Component {
  constructor(p) {
    super(p)
    this.state = {
      nameStatus: '',
      addressStatus: '',
      phoneStatus: '',
      help: ''
    }
  }
  blur = () => {
    let username = this.props.form.getFieldsValue().username;
    if( username === undefined || username === '') {
      this.setState({
        nameStatus: 'error',
        help: 'ahsjdgas'
      })
    }
    
  }
  focus = () => {
    // let username = this.props.form.getFieldsValue().username;
    this.setState({
      nameStatus: '',
      help: ''
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { nameStatus,addressStatus,phoneStatus,help } = this.state;
    return (
      <div>
        <Form {...formItemLayout} hideRequiredMark={this.props.hideRequiredMark}>
          <Form.Item 
            {...formItemLayoutFirst}
            label={this.props.title}
            colon={false}
            className='tit'>
            <div className='hr'></div>
          </Form.Item>
          <Form.Item 
            label="姓名"
            colon={false}
            hasFeedback
            validateStatus={nameStatus}
            help={help}>
            {getFieldDecorator('username', {
              rules: [{
                required: true,
                message: 'Please input your name',
              }],
            })(
              <Input placeholder="" onBlur={this.blur} onFocus={this.focus}/>
            )}
          </Form.Item>
          <Form.Item 
            label="手机/固话"
            colon={false}
            hasFeedback
            validateStatus={phoneStatus}
            extra
            help=''>
            {getFieldDecorator('phone', {
              rules: [{
                required: true,
                message: 'Please input your phonenumber',
              }],
            })(
              <Input placeholder="" />
            )}
          </Form.Item>
          <Form.Item 
            label={this.props.address}
            colon={false}
            hasFeedback
            validateStatus={addressStatus}
            extra
            help="">
            {getFieldDecorator('address', {
              rules: [{
                required: true,
                message: 'Please input your address',
              }],
            })(
              <Input placeholder="输入城市名" />
            )}
            
          </Form.Item>
          <Form.Item 
            label=" "
            colon={false}
          >
              <Input placeholder="详细地址" />
          </Form.Item>
          
        </Form>
      </div>
    )
  }
}
Bd.propTypes = {
  title: PropTypes.string.isRequired,
  address: PropTypes.string,
  hideRequiredMark: PropTypes.bool
}
Bd.defaultProps = {
  title: '寄件人信息',
  address: '上门地址',
  hideRequiredMark: false
}
export default Bd = Form.create()(Bd);