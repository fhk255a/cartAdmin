import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Row, Col, Button } from 'antd'
import './style.less'
import Header from './components/Header'
import Footer from './components/Footer'
import Side from './components/Side'
import Ui from './pages/ui'
import { HashRouter , Route , Switch } from 'react-router-dom'
export default class Admin extends Component {
    render() {
        return (
            <div>
                <Row className="container">
                    <Col span={3} className="side">
                        <Side/>
                    </Col>
                    <Col span={21} className="main">
                        <Header/>
                        <HashRouter>
                            <Row className="content">
                                <Switch>
                                    <Route path="/admin/ui" component={Ui} />
                                    <Route path="/admin/user" ></Route>
                                </Switch>
                            </Row>
                        </HashRouter>
                        <Footer/>
                    </Col>
                </Row>
            </div>
        )
    }
}