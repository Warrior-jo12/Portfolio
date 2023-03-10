import React, { useEffect, useState } from 'react';
import {Navbar , Container, Nav} from 'react-bootstrap'
import { logo, navBarIcon1, navBarIcon2, navBarIcon3 , logo1, githubIcon, telegram} from '../assets';
import {Github} from 'react-bootstrap-icons'

const NavBar = () => {
  const [activeLink , setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = () => {
        if (window.scrollY > 50){
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])


    const onUpdateActiveLink = (value) =>{
        setActiveLink(value)
    }

    return (
        <Navbar expand='lg' className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img  src={logo1} alt="logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='basic-navbar-nav'>
                    <span className='navabr-toggler-icon'> </span>
                </Navbar.Toggle>
                <Navbar.Collapse id ="basic-navabr-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('about')}>About</Nav.Link>
                        
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/eyob-alemu-388307247"><img src={navBarIcon1}/></a>
                            <a href="https://github.com/Warrior-jo12"><img src={githubIcon}/></a>
                            <a href="https://t.me/Warrior_ey"><img src={telegram}/></a>
                        </div>
                        {/* <button className='vvd' onClick={()=> console.log('connect')}><span>Let's Connect</span></button> */}
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )


}

export default NavBar