import React from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { colorSharp, projImg1, projImg2, projImg3} from '../assets';
const Project = () => {

    const projects = [
        {
            id: 1,
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
            id: 2,
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
            id: 3,
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
            id: 4,
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
            id: 5,
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
            id: 6,
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];
  return (
    <section className='project' id='projects'>
        <Container>
            <Row>
                <Col>
                  <h2>Projects</h2>
                  <p>Lorem ipsum is simply dummy text of the  printing and dtypw shckkj </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project)=>{
                                        return(
                                
                                        <Col sm={6} md={4} key={project.id}>
                                            <div className='proj-imgbx'>
                                                <img src={project.imgUrl}/>
                                                <div className='proj-txtx'>
                                                    <h4>{project.title}</h4>
                                                    <span>{project.description}</span>
                                                </div>
                                            </div>
                                        </Col>

                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Coming Soon</Tab.Pane>
                        <Tab.Pane eventKey="third">Coming Soon</Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp} />
    </section>
  )
}

export default Project