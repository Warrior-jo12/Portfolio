import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {logo1, navBarIcon1, navBarIcon2, navBarIcon3} from '../assets'

const Footer = () => {
  return (
    <footer className='footer'>
        <Row className='align-item-center'>
            <Col sm={6}>
            <img src={logo1}></img>
            </Col>
            <Col sm={6} className='text-center text-sm-end'>
                <div className='social-icon'>
                    <a href=''><img src={navBarIcon1}/></a>
                    <a href=''><img src={navBarIcon2}/></a>
                    <a href=''><img src={navBarIcon3}/></a>
                </div>
                <p>CopyRight 2023. All Right Reserved</p>
            </Col>
        </Row>
    </footer>
  )
}

export default Footer