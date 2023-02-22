import React, { useEffect, useState } from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import {ArrowRightCircle} from 'react-bootstrap-icons'
import { headerImg } from '../assets'
const Banner = () => {

    const [loopNum, setLoopNum]= useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Learning on","Web Developing", "Machine Learning", "Backend Developing"];
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
                    <p> I'm a software engineering student at Jimma University. 
                        I really enjoy learning programming language like python and JavaScript. On the other hand, frameworks
                         like Django and React. Additionally, I'm interested on AI which I'm enthusiastic to learn more about it.

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