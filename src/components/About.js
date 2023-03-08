import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProfileIMG, navBarIcon1, telegram, githubIcon } from '../assets'
import {ArrowRightCircle} from 'react-bootstrap-icons'

const About = () => {
  return (
    <section className='skill' id = 'about'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>About Me</h2>
                            <p>
                             
                            I'm currently fourth year software student at Jimma University. Developing my skill on web developing, Additionally, I'm interested on AI which I'm enthusiastic to learn more about it.
                            I really enjoy learning programming language like python and JavaScript. On the other hand, frameworks
                         like Django and React. I'm very
                            interested in learning new things and open for any ideas that can be relevant for my growth as a software engineer. 
                            </p>   
                            <div style={{ marginBottom: '5px'}}>
                            <img style={{width:'300px', height:'300px', borderRadius:'50%'}} src={ProfileIMG}/>
                            </div>
                            <div className='social-icon'>
                                <a href="https://www.linkedin.com/in/eyob-alemu-388307247"><img src={navBarIcon1}/></a>
                                <a href="https://github.com/Warrior-jo12"><img src={githubIcon}/></a>
                                <a href="https://t.me/Warrior_ey"><img src={telegram}/></a>
                            </div>
                            <p>You can download my resume from google drive 
                                <a href='https://drive.google.com/file/d/1HYu3-4S9PJMOBuOFuZrcqJPGkljtSXAB/view?usp=share_link' style={{display:'block', textDecoration: 'none', color: 'white'}}>Download Resume</a>
                                And you can contact me by my email <a style={{display:'block', textDecoration: 'none', color: 'white'}} href="mailto:eyutialemu@gmail.com?subject=Mail from my portfolio">Send to my email</a>
                            </p>
                            
                        </div>
                        
                    </Col>
                </Row>
            </Container>
    </section>
  )
}

export default About