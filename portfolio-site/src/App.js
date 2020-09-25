import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

/* Components */
import Footer from './components/Footer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Rivermoon",
      headerLinks: [
        { title:'Home', path:'/' },
        {title:'About', path:'/about'},
        {title:'Contact', path:'/contact'}
      ],
      home: {
        title: "Keep Pushing!",
        subTitle: "Projects",
        text: "Check out my projects!"
      },
      about: {
        title: "About",
      },
      contact: {
        title: "Contact",
      }

    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">

            <Navbar.Brand>rivermoon</Navbar.Brand>
            <Navbar.Toggle className="ml-auto" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">

              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/">About</Link>
                <Link className="nav-link" to="/">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Footer />

        </Container>

      </Router>
    );
  }

}

export default App;
