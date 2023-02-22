import React, { useEffect, useState } from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import {ArrowRightCircle} from 'react-bootstrap-icons'
import { headerImg } from '../assets'
const Banner = () => {

    const [loopNum, setLoopNum]= useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Developing myself on ","Web Developing", "Machine Learning", "Backend Developing"];
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300-Math.random()*100)
    const period = 2000

    useEffect(()=>{
        let ticker =  setInterval(()=>{
            tick()
        },delta)
         return () => {clearInterval(ticker)}
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length -1): fullText.substring(0, text.length + 1)  
        setText(updatedText)
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1> {`Hi I'm Eyob Alemu`} <span className='wrap'>{text}</span></h1>
                    <p> 
                        The universe is vast and there is no any evidence that it have a boundary. Software engineering has the same phenomena; you can manifest it in different 
                        disciplines. Making a great impact on the world. <br/>
    
                        <b>"Software is like entropy. It is difficult to grasp, weighs nothing, and obeys the second law of thermodynamics; 
                        i.e. it always increases." </b> Norman Ralph Augustine
                          
                    </p>
                    
                    {/* <button onClick={()=> console.log('connect')}> Let's connect <ArrowRightCircle size={25}/></button> */}
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="header img"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner