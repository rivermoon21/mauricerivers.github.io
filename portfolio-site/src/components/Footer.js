import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';

import Modal from "../components/Modal";

function Footer() {

    return (
      <footer className="mt-5">
        <Container fluid={true} >
        <Col className="border-top justify-content-between p-3" >

          <Row className="justify-content-center" style={{ fontFamily: "Kaushan Script, cursive", color: "#c1b" }} >
            <Col lg="1" sm="4" xs="4" >
              <SocialIcon url="https://github.com/rivermoon21" target="_blank" rel="noopener noreferrer" bgColor="#e600e6" style={{ height: 50, width: 50 }} />
            </Col>

            <Col lg="1" sm="4" xs="4" >
              <SocialIcon url="https://www.linkedin.com/in/mrivera93/" target="_blank" rel="noopener noreferrer" bgColor="#e600e6" style={{ height: 50, width: 50 }} />
            </Col>

            <Col lg="1" sm="4" xs="4" >
              <SocialIcon url="https://twitter.com/rivermoon21" target="_blank" rel="noopener noreferrer" bgColor="#e600e6" style={{ height: 50, width: 50 }} />
            </Col>
          </Row>

            <Row className="p-3 justify-content-center" md={3} style={{ fontFamily: "Andale Mono, monospace", fontSize: 15, color: "#c1b" }}>
              © 2020 Developed by Mauricio. All Rights Reserved.
            </Row>
        </Col>
        </Container>
      </footer>
    );
}

export default Footer;