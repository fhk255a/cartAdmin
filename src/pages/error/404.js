import React,{Component} from 'react';
import {Button} from 'antd';
import './error.less'
import imgUrl from '../../static/image/404.jpg'
export default class Error404 extends Component{
  render(){
    return(
      <div className="error-page">
        <div className="error-inner">
          <div className="error-img">
            <img src={imgUrl}></img>
          </div>
        </div>
        <div className="error-button">
          <p>由于作者业务时间及不够，该页面暂时没有功能展示。</p>
          <Button type="primary" shape="round"  >回到首页</Button>
        </div>
      </div>
    )
  }
}