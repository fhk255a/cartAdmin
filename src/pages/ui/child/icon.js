import React,{Component} from 'react'
import {Icon , Card , Radio } from 'antd'
const RadioGroup = Radio.Group;
export default class Icons extends Component{
  constructor(props){
    super(props)
    const colors=[
      '#eb2f96','#f5222d','#fa541c','#fa8c16',
      '#faad14','#a0d911','#52c41a','#13c2c2',
      '#1890ff','#2f54eb','#722ed1','#ff5500',
      '#2db7f5','#87d068','#108ee9','#25b864'
    ]
    this.state={
      size:50,
      color:'#2db7f5',
      colors:colors
    }
    this.onChangeIconColor.bind(this);
  }

  onChangeIconColor=(colors)=>{
    this.setState({
      color:colors.target.value
    })
  }

  render(){
    return(
      <div className="icons-page">
        <Card title="颜色切换">
          <RadioGroup className="background-card" onChange={this.onChangeIconColor} value={this.state.value}>
            {this.state.colors.map((item,index)=>{
              return <Radio value={item} key={index}><i style={{background:item}}></i></Radio>
            })}
          </RadioGroup>
        </Card>
        <Card title="方向性图标">
          <Icon type="up-circle" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="down-circle" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="left-circle" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="right-circle" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="play-circle" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="up-square" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="down-square" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="left-square" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="right-square" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
        </Card>
        <Card title="提示建议性图标">
          <Icon type="question-circle" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="plus-circle" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="pause-circle" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="minus-circle" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="info-circle" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="exclamation-circle" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="close-circle" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="check-circle" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="clock-circle" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="stop" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="plus-square" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="minus-square" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="close-square" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="check-square" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="warning" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
        </Card>
        <Card title="编辑类图标">
          <Icon type="edit" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="copy" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="delete" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="snippets" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="diff" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="highlight" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="pie-chart" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="box-plot" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="fund" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>  
          <Icon type="sliders" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="pie-chart" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="fund" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
        </Card>
        <Card title="社交图标">
          <Icon style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} type="wechat" ></Icon>
          <Icon style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} type="qq" ></Icon>
          <Icon style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} type="aliwangwang" ></Icon>
          <Icon style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} type="android" ></Icon>
          <Icon style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} type="apple" ></Icon>
          <Icon style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} type="github" ></Icon>
          <Icon style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} type="taobao-circle" ></Icon>
          <Icon style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} type="alipay-circle" ></Icon>
          <Icon style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} type="taobao" ></Icon>
          <Icon style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} type="alipay" ></Icon>
          <Icon style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} type="instagram" ></Icon>
          <Icon style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} type="ie" ></Icon>
        </Card>
        <Card title="网站通用图标">
          <Icon type="lock" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="unlock" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="book" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="cloud" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="code" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="copy" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="credit-card" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="file" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="file-word" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="file-excel" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="file-ppt" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="folder" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>  
          <Icon type="folder-open" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="folder-add" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="frown" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="meh" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="smile" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="tag" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="appstore" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="mail" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="notification" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="picture" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="setting" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="tags" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>  
          <Icon type="video-camera" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="home" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="star" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="heart" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="environment" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="eye" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="eye-invisible" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="camera" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="save" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="phone" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="filter" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="customer-service" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="like" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="dislike" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="message" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="calculator" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="pushpin" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="rocket" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="bell" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>  
          <Icon type="hourglass" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="shop" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="bank" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="contacts" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="fire" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="money-collect" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="safety-certificate" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="shopping" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="thunderbolt" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="dollar" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
          <Icon type="euro" style={{fontSize:this.state.size+'px',color:this.state.color}} twoToneColor={this.state.color} theme="twoTone" ></Icon>
        </Card>
      </div>
    )
  }
}