import React,{Component} from 'react';
import { Tree ,Card,Row,Col,Icon} from 'antd';
import treeData from '../../../lib/menuList'
const { TreeNode } = Tree;
const DirectoryTree = Tree.DirectoryTree;
export default class Trees extends Component{
  constructor(props){
    super(props)
    this.state={
      gData:treeData
    }
  }
  render(){
    // 递归
    const loop = data => data.map((item) => {
      if (item.children && item.children.length) {
        return <TreeNode key={item.key} title={item.title}>{loop(item.children)}</TreeNode>;
      }
      return <TreeNode key={item.key} title={item.title} />;
    });

    // 带icon的
    const loopIcon = data => data.map((item) => {
      if (item.children && item.children.length) {
        return <TreeNode icon={<Icon type="frown" />} key={item.key} title={item.title}>{loop(item.children)}</TreeNode>;
      }
      return <TreeNode icon={<Icon type="smile" />} key={item.key} title={item.title} />;
    });
    return(
      <div className="tree-page">
        <Row gutter={16}>
          <Col span={12}>
            <Card title="常用树状">
              <Tree
                checkable
                defaultExpandedKeys={['0-0-0', '0-0-1']}
                defaultSelectedKeys={['0-0-0', '0-0-1']}
                defaultCheckedKeys={['0-0-0', '0-0-0-1']}
                onSelect={this.onSelect}
                onCheck={this.onCheck}
              >
                <TreeNode title="parent 1" key="0-0">
                  <TreeNode title="parent 1-0" key="0-0-0" disabled>
                    <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                    <TreeNode title="leaf" key="0-0-0-1" />
                  </TreeNode>
                  <TreeNode title="parent 1-1" key="0-0-1">
                    <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
                  </TreeNode>
                </TreeNode>
              </Tree>
            </Card>
          </Col>
          <Col span={12} >
            <Card title="图标树状">
              <Tree
                className="icon-tree"
                defaultExpandedKeys={this.state.expandedKeys}
                draggable
                onDragEnter={this.onDragEnter}
                onDrop={this.onDrop}
              >
                {loop(this.state.gData)}
              </Tree>
            </Card>        
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12} >
            <Card title="自定义图标树状">
              <Tree
                showLine
                className="diy-icon-tree"
                defaultExpandedKeys={this.state.expandedKeys}
                draggable
                onDragEnter={this.onDragEnter}
                onDrop={this.onDrop}
              >
                {loop(this.state.gData)}
              </Tree>
            </Card>        
          </Col>
          <Col span={12} >
            <Card title="拖拽树状">
              <Tree
                showIcon  
                className="draggable-tree"
                defaultExpandedKeys={this.state.expandedKeys}
                draggable
                onDragEnter={this.onDragEnter}
                onDrop={this.onDrop}
                icon={<Icon type="smile" />}
              >
                {loopIcon(this.state.gData)}
              </Tree>
            </Card>        
          </Col>
        </Row>
        <Row gutter={16}>
          <Col>
            <Card title="文件夹树状图">
              <DirectoryTree
                multiple
                defaultExpandAll
                onSelect={this.onSelect}
                onExpand={this.onExpand}
              >
                {loop(this.state.gData)}
              </DirectoryTree>
            </Card>
          </Col>
        </Row>

      </div>
    )
  }
}