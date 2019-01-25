import React,{Component} from 'react';
import { HashRouter , Route , Switch } from 'react-router-dom'
import Admin from './admin'
import Login from './pages/Login'
import Error404 from './pages/error/404'
export default class Router extends Component{
  render(){
    return(
      <div>
        <HashRouter>
          <div>
            <Switch>
              <Route path="/admin" component={Admin}/>
              <Route path="/login" component={Login}/>
              <Route component={Error404}/>
            </Switch>
          </div>
        </HashRouter>
      </div>
    )
  }
}