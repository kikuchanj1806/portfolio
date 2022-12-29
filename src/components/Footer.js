import React from "react";
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai"
import { Container, Row, Col } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";


function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md={4} className="footer-copywright">
                    <h3>Designed and Developed by TungLX</h3>
                </Col>
                <Col md={4} className="footer-copywright">
                    <h3>Copyright © {year} SB</h3>
                </Col>
                <Col md={4} className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/kikuchanj1806"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.facebook.com/tung.lexuan.33449138/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BsFacebook />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/xtunglgc__/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;