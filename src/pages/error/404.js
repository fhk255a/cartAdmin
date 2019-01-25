import React,{Component} from 'react';
import imgUrl from '../../static/image/404.jpg'
export default class Error404 extends Component{
  render(){
    return(
      <div>
        <img src={imgUrl}></img>
      </div>
    )
  }
}