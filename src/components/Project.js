import React, { useState } from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { AIPROJ, chatgpt, colorSharp, projImg1, projImg2, projImg3, projImg4} from '../assets';
const Project = () => {

    const [IsNewProject, setIsNewProj] = useState(false)

    const projects = [
        {
            id: 1,
          title: "Ey Media",
          description: "This is a youtube clone. That you can search for videos , channels and choose main videos catagories. It uses youtube API  ",
          imgUrl: projImg4,
          repoUrl:'#'
        },
        {
          id: 2,
        title: "Custom ChatGPT",
        description: "This is website use openAI API to work. It clones chatCPT, hence you can ask anything and the bot will answer for valid question. The github repo link will be available as soon  as the project is finished",
        imgUrl: chatgpt,
        repoUrl:'#'
      },
      {
        id: 3,
      title: "AI Image generator",
      description: "This website is MidJourney and DALL_E clone. it generate images form user prompts and the user can share the generated image. This website is developed using MERN stack. The github repo link will be available as soon  as the project is finished",
      imgUrl: AIPROJ,
      repoUrl:'#'
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
                                                    <div><a style ={{textDecoration: 'none', color: 'white'}}href={project.repoUrl}>Github Repo link</a></div>
                                                </div>
                                            </div>
                                        </Col>

                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second" className={IsNewProject ? '' : 'tab-pane'}>
                          <p>Coming Soon</p>
                          </Tab.Pane>
                        <Tab.Pane eventKey="third"><p>Coming Soon</p></Tab.Pane>
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