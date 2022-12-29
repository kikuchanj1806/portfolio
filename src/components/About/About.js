import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import GitHubCalendar from 'react-github-calendar';
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { DiJavascript1, DiNodejs, DiPhp } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { BiGitBranch } from "react-icons/bi";
import { AiOutlineGitlab } from "react-icons/ai";
import { SiFirebase, SiHeroku, SiLinux, SiMongodb, SiPostman, SiSwagger, SiVercel, SiVisualstudiocode } from "react-icons/si";


import laptopImg from "../../Assets/about.png";
import Particle from "../Particle";


function About() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}>
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            Know Who <strong className="purple">I'M</strong>
                        </h1>
                        <Card className="quote-card-view">
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p style={{ textAlign: "justify" }}>
                                        Hi Everyone, I am <span className="purple">Le Xuan Tung </span>
                                        from <span className="purple"> Trieu Son, Thanh Hoa.</span>
                                        <br />I used to study at Academy of Cryptography Techniques majoring in information security.
                                        <br />
                                        <br />
                                        Apart from coding, some other activities that I love to do!
                                    </p>
                                    <ul>
                                        <li className="about-activity">
                                            <ImPointRight /> Playing Games
                                        </li>
                                        <li className="about-activity">
                                            <ImPointRight /> Reading comics
                                        </li>
                                        <li className="about-activity">
                                            <ImPointRight /> Travelling
                                        </li>
                                    </ul>

                                    <p style={{ color: "rgb(155 126 172)" }}>
                                        "Strive to build things that make a difference!"{" "}
                                    </p>
                                    <footer className="blockquote-footer">TungLX</footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img src={laptopImg} alt="about" className="img-fluid" />
                    </Col>
                </Row>
                <h1 className="project-heading">
                    Professional
                    <strong class="purple">Skillset </strong>
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                    <Col className="tech-icons" md={2} xs={4}>
                        <DiPhp />
                    </Col>
                    <Col className="tech-icons" md={2} xs={4}>
                        <DiJavascript1 />
                    </Col>
                    <Col className="tech-icons" md={2} xs={4}>
                        <DiNodejs />
                    </Col>
                    <Col className="tech-icons" md={2} xs={4}>
                        <GrReactjs />
                    </Col>
                    <Col className="tech-icons" md={2} xs={4}>
                        <BiGitBranch />
                    </Col>
                    <Col className="tech-icons" md={2} xs={4}>
                        <AiOutlineGitlab />
                    </Col>
                    <Col className="tech-icons" md={2} xs={4}>
                        <SiSwagger />
                    </Col>
                    <Col className="tech-icons" md={2} xs={4}>
                        <SiMongodb />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <SiFirebase />
                    </Col>
                </Row>
                <h1 className="project-heading">
                    Tools
                    <strong class="purple">I use </strong>
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                    <Col xs={4} md={2} className="tech-icons">
                        <SiLinux />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <SiVisualstudiocode />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <SiPostman />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <SiVercel />
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <SiHeroku />
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                        Days I
                        <strong class="purple">Code</strong>
                    </h1>
                    <GitHubCalendar
                        username="kikuchanj1806"
                        blockSize={15}
                        blockMargin={5}
                        color="#c084f5"
                        fontSize={16}
                    />
                </Row>
            </Container>
        </Container>
    )
}

export default About;