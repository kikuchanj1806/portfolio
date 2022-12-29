import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import laptopImg from "../../Assets/about.png";
import Particle from "../Particle";


function About() {
    return (
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
                                    Hi Everyone, I am <span className="purple">Soumyajit Behera </span>
                                    from <span className="purple"> Bhubaneswar, India.</span>
                                    <br />I am a junior pursuing IMSC in Maths and Computing in BIT
                                    Mesra.
                                    <br />
                                    <br />
                                    Apart from coding, some other activities that I love to do!
                                </p>
                                <ul>
                                    <li className="about-activity">
                                        <ImPointRight /> Playing Games
                                    </li>
                                    <li className="about-activity">
                                        <ImPointRight /> Writting Tech Blogs
                                    </li>
                                    <li className="about-activity">
                                        <ImPointRight /> Travelling
                                    </li>
                                </ul>

                                <p style={{ color: "rgb(155 126 172)" }}>
                                    "Strive to build things that make a difference!"{" "}
                                </p>
                                <footer className="blockquote-footer">Soumyajit</footer>
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
        </Container>
    )
}

export default About;