import React from 'react'
import { Container , Row, Col} from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { colorSharp, python, django, django2, javascript, javascript_1, react, node, monogdb, mysql, html , css} from '../assets';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>
                            Skills
                        </h2>
                        <p>
                            I'm developing myself on the following programming language and frameworks which will help me in web developing and in the AI world. 
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className='item'>
                               <img  src={python} alt="image"/>
                               <h5>Python </h5> 
                            </div>
                            <div className='item'>
                               <img  src={django2} alt="image"/>
                               <h5>Django</h5> 
                            </div>
                            <div className='item'>
                               <img  src={html} alt="image"/>
                               <h5>HTML</h5> 
                            </div>
                            <div className='item'>
                               <img  src={css} alt="image"/>
                               <h5>CSS</h5> 
                            </div>
                            <div className='item'>
                               <img  src={javascript_1} alt="image"/>
                               <h5>JavaScript</h5> 
                            </div>
                            <div className='item'>
                               <img  src={react} alt="image"/>
                               <h5>React</h5> 
                            </div>
                            <div className='item'>
                               <img  src={node} alt="image"/>
                               <h5>Node Js</h5> 
                            </div>
                            <div className='item'>
                               <img  src={monogdb} alt="image"/>
                               <h5>MongoDB</h5> 
                            </div>
                            <div className='item'>
                               <img  src={mysql} alt="image"/>
                               <h5>MySQL</h5> 
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img  className='background-image-left'  src={colorSharp} />
    </section>
  )
}

export default Skills