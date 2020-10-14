import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {

    return (
      <footer className="mt-5">
        <Container fluid={true} >
        <Col className="border-top justify-content-between p-3" >
          <Row className="p-0 justify-content-center" md={3} sm={12} style={{ fontFamily: "Kaushan Script, cursive", fontSize: 35, color: "#c1b" }} >
            rivermoon
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
