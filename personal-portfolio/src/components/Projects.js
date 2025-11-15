import 'animate.css';
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

  const projects = [
    {
      title: "SnappyLink",
      description: "This is a project I implemented a Flask-based python web framework to build RESTful API, redirect users to original long url by short links and corresponding QR codes",
      imgUrl: projImg1,
      link: "http://i16k.com/",
      githubLink: "https://github.com/Li-qianyi-Lynn/SnappyLink",
    },
    {
      title: "Lynn & Her Cats",
      description: "This website is a collection of photos and stories about my cats that I have cared for. Each cat has its own story, and I hope this website will help you understand their habits",
      imgUrl: projImg2,
      link: "https://lynn-cats-web.vercel.app/",
      githubLink: "https://github.com/Li-qianyi-Lynn/lynn-cats-web",
    },
    {
      title: "SceneSound",
      description: "SceneSound is an AI Music Recommendation App that analyzes user-uploaded images or input text to identify emotions and scenes, then recommends matching music playlists",
      imgUrl: projImg3,
      link: "https://github.com/Li-qianyi-Lynn/SceneSound-LynnVersion",
      githubLink: "https://github.com/Li-qianyi-Lynn/SceneSound-LynnVersion",
    },
  ];

  const projectsTab2 = [
    {
      title: "Squarespace Data Sweeper",
      description: "Upload your Squarespace CSV to categorize attendees and remove sensitive information",
      imgUrl: projImg4,
      link: "https://rise2gether-sweeper.vercel.app",
      githubLink: "https://github.com/Li-qianyi-Lynn/rise2gether-sweeper",
    },
    {
      title: "NotebookLM Prompt Generator",
      description: "Generate prompts for NotebookLM to help people write professional and accurate prompts",
      imgUrl: projImg5,
      link: "https://policy-analyzer-iota.vercel.app/",
      githubLink: "https://github.com/Li-qianyi-Lynn/policy-analyzer",
    },
    {
      title: "web for Didi Cat",
      description: "A website for Didi Cat to let people know more about Didi and other cats",
      imgUrl: projImg6,
      link: "https://didi-home.vercel.app/",
      githubLink: "https://github.com/Li-qianyi-Lynn/Webdesign",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I'm passionate about using technology to solve real-world problems and make everyday life more enjoyable～</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectsTab2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>To be updated.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background decoration"></img>
    </section>
  )
}
