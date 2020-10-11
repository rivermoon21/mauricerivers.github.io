import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {

    return (
      <footer className="mt-5">
        <Container fluid={true} >
          <Row className="border-top justify-content-between p-3" >
            <Col className="p-0" md={3} sm={12} style={{ fontFamily: "Kaushan Script, cursive", fontSize: 30, color: "#DE3636" }}>
              rivermoon
            </Col>
            <Col className="p-0 d-flex justify-content-end" md={3} style={{ fontFamily: "Kaushan Script, cursive", fontSize: 20, color: "#DE3636" }}>
              © 2020 Developed by Mauricio. All Rights Reserved.
            </Col>

          </Row>
        </Container>
      </footer>
    );
}

export default Footer;
