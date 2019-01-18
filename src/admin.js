import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd'
import './style.less'
import Header from './components/Header'
import Footer from './components/Footer'
import Side from './components/Side'
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
                        <Row className="content">
                            content
                        </Row>
                        <Footer/>
                    </Col>
                </Row>
            </div>
        )
    }
}