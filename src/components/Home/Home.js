import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import NavBar from "../Navbar";
import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";
import HomeContent from "./HomeContent";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <NavBar />
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hi There!
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h1>
                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name"> Le Xuan Tung</strong>
                            </h1>
                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type />
                            </div>
                        </Col>
                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: 450 }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <HomeContent />
        </section >
    )
}

export default Home;