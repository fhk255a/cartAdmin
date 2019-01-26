import React,{ Component } from 'react';
import { Card , Affix , Breadcrumb , Row , Col , Button , Dropdown , Icon , Menu , Pagination , Steps } from 'antd';
import treeData from '../../../lib/menuList'
const menuData = treeData; 

export default class Nav extends Component{
  state={
    data:['Home','Nav','Ui','Vip','About'],
    iconData:[
      {icon:'home',value:'Home'},
      {icon:'appstore',value:'Nav'},
      {icon:'smile',value:'Ui'},
      {icon:'rocket',value:'Vip'},
      {icon:'message',value:'About'},
    ],
    collapsed:false
  }

  // 加载普通面包屑
  loop(data){
    return(
      data.map(item=>{
        return <Breadcrumb.Item><a>{item}</a></Breadcrumb.Item>
      })
    )
  }
  // 加载图标面包屑
  loopIcon(data){
    return(
      data.map(item=>{
        return <Breadcrumb.Item>
          <a><Icon type={item.icon} />{item.value}</a>
        </Breadcrumb.Item>
      })
    )
  }
  // 加载导航条
  loopMenu =data=>data.map(item=>{
    if(item.children && item.children.length){
      return <Menu.SubMenu key={item.key} title={item.title}>{this.loopMenu(item.children)}</Menu.SubMenu>
    }
    return <Menu.Item key={item.key}>{item.title}</Menu.Item>
  })
  // 加载伸缩导航条
  loopMenu =data=>data.map(item=>{
    if(item.children && item.children.length){
      return <Menu.SubMenu key={item.key} title={<span><Icon type="home"/><span>{item.title}</span></span>} >{this.loopMenu(item.children)}</Menu.SubMenu>
    }
    return <Menu.Item key={item.key}>{item.title}</Menu.Item>
  })
  isCollapsed(){
    let isTrue = this.state.collapsed;
    this.setState({
      collapsed:!isTrue
    })
  }
  render(){
    return(
      <div className="nav-page">
        <Card title="导航条">
          <Menu
            mode="horizontal"
          >
            {this.loopMenu(treeData)}
          </Menu>
        </Card>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="面包屑">
              <div className="crumb-item">
                <Breadcrumb>
                  {this.loop(this.state.data)}
                </Breadcrumb>
              </div>
              <div className="crumb-item">
                <Breadcrumb>
                  {this.loopIcon(this.state.iconData)}
                </Breadcrumb>
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="伸缩导航条">
              <Button onClick={this.isCollapsed.bind(this)}>
                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
              </Button>
              <Menu 
                mode="horizontal"
                mode="inline"
                inlineCollapsed={this.state.collapsed}
              >
                {this.loopMenu(menuData)}
              </Menu>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}