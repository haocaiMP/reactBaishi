import React, { Component } from 'react'
import { Form, Checkbox, Select, Input } from 'antd';
import './bd.css'
const { Option } = Select;
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const formItemLayoutFirst = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
class Product extends Component {

  render() {
    const { getFieldDecorator } = this.props.form;
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
            label="请选择重量"
            hasFeedback
            className="sel_1"
          >
            <Select defaultValue="1">
              <Option value="1">一公斤以下</Option>
              <Option value="2">1-5公斤</Option>
              <Option value="3">5公斤以上</Option>
            </Select>
          </Form.Item>
          <Form.Item 
            label=" "
            colon={false}
          >
            <Checkbox>我的货物不重，但是体积很大</Checkbox>
          </Form.Item>
          <Form.Item 
            label="备注"
            colon={false}
            hasFeedback
            help="禁寄须知"
            className='remarks'
          >
            {getFieldDecorator('username', {})(
              <Input placeholder="易碎品、液体、贵金属品等请特别说明"/>
            )}
          </Form.Item>
          <Form.Item 
            label="附加服务"
            colon={false}
          >
            <Checkbox>物品保价</Checkbox>
            <Checkbox>代收货款</Checkbox>
          </Form.Item>
          
          
        </Form>
      </div>
    )
  }
}

export default Product = Form.create()(Product);