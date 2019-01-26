import React,{ Component } from 'react'
import { HashRouter , Route , Switch } from 'react-router-dom'
import Buttons from './child/button'
import Inputs from './child/input'
import Icons from './child/icon'
import Alerts from './child/alert'
import Trees from './child/tree'
import Loading from './child/loading'
import Nav from './child/nav'
import NoMatch from '../../pages/error/404'
import './child/ui.less'
const _UI = '/admin/ui';  
const _DATA = '/admin/ui/data';  
const _FORM = '/admin/ui/form';  
const _COMMON = '/admin/ui/common';  
/*
{URL+"/"}
*/
export default class Ui extends Component{
  render(){
    return(
      <div className="ui-page">
        <Switch>
          <Route path={_FORM+"/button"} component={Buttons}/>
          <Route path={_FORM+"/input"} component={Inputs}/>
          <Route path={_COMMON+'/icon'} component={Icons}/>
          <Route path={_COMMON+'/alert'} component={Alerts}/>
          <Route path={_COMMON+'/loading'} component={Loading}/>
          <Route path={_DATA+'/tree'} component={Trees}/>
          <Route path={_UI+'/nav'} component={Nav}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}