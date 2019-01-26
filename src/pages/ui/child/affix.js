import React,{Component} from 'react';
import { Affix , Button } from 'antd';

export default class Affixs extends Component{
  state={
    top:20,
    bottom:20,
  }

  render(){
    return(
      <Affix offsetTop={this.state.top}>
        <Button
          type="primary"
          onClick={() => {
            this.setState({
              top: this.state.top + 10,
            });
          }}
        >
          Affix top
        </Button>
      </Affix>
    )
  }
}
