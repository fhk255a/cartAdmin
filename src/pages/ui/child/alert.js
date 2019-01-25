import React,{Component} from 'react'
import { Modal, Button , Card, Col, Row} from 'antd';
const confirm = Modal.confirm;
const infoBox = Modal.info;
const errorBox = Modal.error;
const warningBox = Modal.warning;
const successBox = Modal.success;

export default class Alerts extends Component{
  constructor(props){
    super(props);
    this.onOk.bind(this);
    this.onCannel.bind(this);
    this.state={
      visible:false
    }
  }
  confirmBox = () => {
    return(
      <div className="alert-box w400">
        <div className="ant-modal-content">
          <div className="ant-modal-body">
            <div className="ant-modal-confirm-body-wrapper">
              <div className="ant-modal-confirm-body">
                <span className="ant-modal-confirm-title">Do you Want to delete these items?</span>
                <div className="ant-modal-confirm-content">Some descriptions</div>
              </div>
              <div className="ant-modal-confirm-btns">
                <button type="button" className="ant-btn">
                  <span>Cancel</span>
                </button>
                <button type="button" className="ant-btn ant-btn-primary">
                  <span>OK</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  showBox =()=>{
    this.setState({
      visible:true
    })
  }
  onOk =()=>{
    this.setState({
      visible : false
    })
    console.log('OK');
  }
  onCannel =()=>{
    this.setState({
      visible : false
    })
    console.log('Cancel');
  }

  showConfirm(){
    confirm({
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
      onOk:()=>{
        this.onOk();
      },
      onCancel:()=>{
        this.onCannel();
      },
    });
  }
  info(){
    infoBox({
      title: 'This is a info message',
      content: (
        <div>
          <p>some messages...info messages...</p>
        </div>
      ),
      onOk() {},
    })
  }
  success(){
    successBox({
      title: 'This is a success message',
      content: 'some messages...success messages...',
    })
  }
  warning(){
    warningBox({
      title: 'This is a warning message',
      content: 'some messages...warning messages...',
    })
  }
  error(){
    errorBox({
      title: 'This is an error message',
      content: 'some messages...error messages...',
    })
  }
  render(){
    return(
      <div className="alert-page">
        <Card className="alert-card">
          <Button onClick={this.showConfirm.bind(this)}>Comfirm</Button>
          {this.confirmBox()}
        </Card>
      
        <Card className="tip-box-card" title="信息提示">
          <Button onClick={this.info}>Info</Button>
          <Button onClick={this.success}>Success</Button>
          <Button onClick={this.error}>Error</Button>
          <Button onClick={this.warning}>Warning</Button>
        </Card>
        
        <Card title="常用提示框">
          <Button onClick={this.showBox}>Modal</Button>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.onOk}
            onCancel={this.onCannel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Card>
      </div>
    )
  }
}


