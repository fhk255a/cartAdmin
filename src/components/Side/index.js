import React,{ Component } from 'react'
import { Menu } from 'antd';
import './index.less'
import menuList from './../../lib/menuList'
const SubMenu = Menu.SubMenu;
export default class Side extends Component{
  componentWillMount(){
    const menuTreeNodes = this.renderMenuNode(menuList);
    this.setState({
      menuTreeNodes
    })
  }
  renderMenuNode=(data)=>{
    return data.map((item)=>{
      if(item.children){
        return (
          <SubMenu key={item.key} title={item.title}>
            { this.renderMenuNode(item.children) }
          </SubMenu>
        )
      }
      return <Menu.Item key={item.key} title={item.title}><a href={'#'+item.key}>{item.title}</a></Menu.Item>
    })
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render(){
    return(
      <div>
        <div className="logo">
          <h1>FHK'system</h1> 
        </div>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        > 
          
            {this.state.menuTreeNodes}
        </Menu>
    
      </div>
    )
  }
}
