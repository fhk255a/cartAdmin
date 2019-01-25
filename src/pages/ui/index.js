import React,{ Component } from 'react'
import { HashRouter , Route , Switch } from 'react-router-dom'
import Buttons from './child/button'
import Inputs from './child/input'
import Icons from './child/icon'
import Alerts from './child/alert'
import NoMatch from '../../pages/NoMatch'
import './child/ui.less'
const URL = '/admin/ui';  
/*
{URL+"/"}
*/
export default class Ui extends Component{
  render(){
    return(
      <div className="ui-page">
        <Switch>
          <Route path={URL+"/button"} component={Buttons}/>
          <Route path={URL+"/input"} component={Inputs}/>
          <Route path={URL+'/icon'} component={Icons}/>
          <Route path={URL+'/alert'} component={Alerts}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}