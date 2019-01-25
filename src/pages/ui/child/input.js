import React,{ Component } from 'react'
import { Card , Input , Row , Col , Icon , Button ,Select ,Cascader} from 'antd'
const InputGroup = Input.Group
const Option = Select.Option
const { TextArea } = Input;
const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];
export default class Inputs extends Component{
  render(){
    return(
      <div className="form-page">
        <Row>
          <Col className="form-item">
            <Card title="基础表单" style={{ width: 350 }}>
              <div className="default-input">
                <div className="form-input-item">
                  <label>文本框：</label><Input type="text" />
                </div>
                <div className="form-input-item">
                  <label>号码框：</label><Input type="number" />
                </div>
                <div className="form-input-item">
                  <label>邮箱：</label><Input type="email" />
                </div>
              </div>
            </Card>
            <Card title="登录表单" style={{ width: 350 }}>
              <div className="login-input-2">
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password"  type="password"/>
                <Button type="primary">登录</Button>
              </div>
            </Card>
          </Col>
          <Col>
            <Card title="行内登录表单">
              <div className="login-input-1">
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password"  type="password"/>
                <Button type="primary">登录</Button>
              </div>
            </Card>
          </Col>
          
          <Card title="多功能表单" className="more-input-group">
            <InputGroup compact className="ipunt-group-item">
              <Input style={{width:'30%'}} defaultValue="215537936" type="text"></Input>
              <Input style={{width:'70%'}} defaultValue="215537936" type="text"></Input>
            </InputGroup>
            <InputGroup compact>
              <Select defaultValue="Option1-1">
                <Option style={{width:'50%'}} value="Option1-1">Option1-1</Option>
                <Option style={{width:'50%'}} value="Option1-2">Option1-2</Option>
              </Select>
              <Select defaultValue="Option2-2">
                <Option value="Option2-1">Option2-1</Option>
                <Option value="Option2-2">Option2-2</Option>
              </Select>
            </InputGroup>
            <InputGroup compact >
              <Select style={{ width: '30%' }} defaultValue="Home">
                <Option value="Home">Home</Option>
                <Option value="Company">Company</Option>
              </Select>
              <Cascader style={{ width: '70%' }} options={options} placeholder="Select Address" />
            </InputGroup>
          </Card>
          <Card title="文本域">
            <TextArea rows="5" value="这是一个文本域~~~"></TextArea>
          </Card>
        </Row>
      </div>
    )
  }
}