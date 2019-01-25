import React,{ Component } from 'react'
import { Card , Button , Radio } from 'antd'
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;
export default class Buttons extends Component{
  constructor(props){
    super(props);
    this.state={
      loading:false,
      size:'default'
    }
    this.handlerLoadingBtnClick.bind(this);
  }

  handlerLoadingBtnClick = () =>{
    this.setState({
      loading:!this.state.loading
    })
  }

  handlerSizeRadioChange = (e) => {
    this.setState({
      size:e.target.value,
    })
  }

  render(){
    return(
      <div className="hk-buttons">
        <Card title="基础按钮">
          <RadioGroup onChange={this.handlerSizeRadioChange} value={this.state.size}>
            <Radio  value="small">S</Radio>
            <Radio  value="default">M</Radio>
            <Radio  value="large">L</Radio>
          </RadioGroup>
          <Button size={this.state.size} type="primary">yo~ FHK</Button>
          <Button size={this.state.size} >yo~ FHK</Button>
          <Button size={this.state.size} type="danger">yo~ FHK</Button>
          <Button size={this.state.size} type="dashed">yo~ FHK</Button>
        </Card>
        <Card title="图标按钮">
          <Button type="primary" shape="circle" icon="search" />
          <Button icon="edit" shape="circle" />
          <Button icon="tool" shape="circle" />
          <Button icon="plus" shape="circle" />
          <Button icon="minus" shape="circle" />
          <Button shape="circle" icon="setting" />
          <Button type="danger" shape="circle" icon="delete" />
        </Card>
        <Card title="常用按钮">
          <Button type="primary" icon="plus" >创建</Button>
          <Button icon="edit" >编辑</Button>
          <Button type="danger" icon="delete" >删除</Button>
          <Button type="primary" icon="search">搜索</Button>
          <Button type="info" icon="download" >下载</Button>
        </Card>
        <Card title="功能按钮">
          <Button type="primary" icon="delete" loading={this.state.loading}>loading</Button>
          <Button type="danger" icon="stop" disabled>disabled</Button>
          <Button type="danger" loading={this.state.loading} icon="delete" shape="circle"></Button>
          <Button type="danger" icon="stop" disabled shape="circle"></Button>
          <Button ghost>ghost</Button>
          <Button type="dashed" ghost>幽灵按钮</Button>
          <Button type="primary" icon="loading" onClick={this.handlerLoadingBtnClick}>加载</Button>
        </Card>
        <Card title="组合按钮" className="button-group">
          <ButtonGroup >
            <Button icon="left"></Button>
            <Button icon="right"></Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button type="primary" >OK</Button>
            <Button type="danger" >Cannel</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button icon="edit">edit</Button>
            <Button icon="download">download</Button>
            <Button icon="delete">delete</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button type="primary">上一个</Button>
            <Button type="primary">下一个</Button>
          </ButtonGroup>
        </Card>
      </div>
    )
  }
}