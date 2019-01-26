import React,{Component} from 'react';
import { Button , Icon , Spin , Card, Alert } from 'antd';

export default class Loading extends Component{
  render(){
    const icon = <Icon type="loading"/>
    return(
      <div className="load-page">
        <Card title="Spin用法">
          <Spin size="small"/>
          <Spin />
          <Spin size="large"/>
          <Spin indicator={icon}/>
        </Card>
        <Card title="Alert弹框">
          <Spin tip="loading" indicator={icon}>
            <Alert
              message="这是一个alert提示组件"
              description="备注吗?"
              type="success"
              title="标题？"
            /> 
          </Spin>
          <Alert
            message="这是一个alert组件"
            description="备注吗?"
            type="info"
            title="标题？"
          /> 
          <Spin tip="loading"
          >
            <Alert
              message="这是一个alert组件"
              description="备注吗?"
              type="warning"
              title="标题？"
            /> 
          </Spin>
          <Alert 
            message="这是一个alert组件"
            description="备注吗?"
            type="error"
            title="标题？"
          /> 
        </Card>
      </div>
    )
  }
}