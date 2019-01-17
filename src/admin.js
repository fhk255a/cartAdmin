import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd'
import './style.less'
import Header from './components/Header'
import Footer from './components/Footer'

export default class Admin extends Component {
    render() {
        return (
            <div>
                <Row className="container">
                    <Col span={4} className="side">
                        side
                    </Col>
                    <Col span={20} className="main">
                        <Header></Header>
                        <Row className="content">
                            content
                        </Row>
                        <Footer></Footer>
                    </Col>
                </Row>
            </div>
        )
    }
}