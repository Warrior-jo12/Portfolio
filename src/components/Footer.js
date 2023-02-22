import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {logo1, navBarIcon1, githubIcon, telegram} from '../assets'

const Footer = () => {
  return (
    <footer className='footer'>
        <Row className='align-item-center'>
            <Col sm={6}>
            <img src={logo1}></img>
            </Col>
            <Col sm={6} className='text-center text-sm-end'>
                <div className='social-icon'>
                <a href="https://www.linkedin.com/in/eyob-alemu-388307247"><img src={navBarIcon1}/></a>
                            <a href="https://github.com/Warrior-jo12"><img src={githubIcon}/></a>
                            <a href="https://t.me/Warrior_ey"><img src={telegram}/></a>
                </div>
                <p>CopyRight 2023. All Right Reserved</p>
            </Col>
        </Row>
    </footer>
  )
}

export default Footer