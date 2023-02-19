import React from 'react'
import { Container , Row, Col} from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { meter1, meter2, meter3, colorSharp } from '../assets';

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
    <section className='skills' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>
                            Skills
                        </h2>
                        <p>
                            loremsjkk sgdkwygdawd dgabafhgavba ygfdcuwecbafgb we
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className='item'>
                               <img  src={meter1} alt="image"/>
                               <h5>Web Development</h5> 
                            </div>
                            <div className='item'>
                               <img  src={meter2} alt="image"/>
                               <h5>Brand Identity</h5> 
                            </div>
                            <div className='item'>
                               <img  src={meter3} alt="image"/>
                               <h5>Logo Design</h5> 
                            </div>
                            <div className='item'>
                               <img  src={meter1} alt="image"/>
                               <h5>web Developemnt</h5> 
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