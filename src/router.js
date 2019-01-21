import React,{Component} from 'react';
import { HashRouter , Route , Switch } from 'react-router-dom'
import Admin from './admin'
import Login from './pages/Login'
import NoMatch from './pages/NoMatch'
export default class Router extends Component{
  render(){
    return(
      <div>
        <HashRouter>
          <div>
            <Switch>
              <Route path="/admin" component={Admin}/>
              <Route path="/login" component={Login}/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </HashRouter>
      </div>
    )
  }
}