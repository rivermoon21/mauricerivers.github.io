import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

/* Components */
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SocialsPage from './pages/SocialsPage';

const resumeLink = "https://docs.google.com/document/d/1a9EUGBGO6NI9d4wfe6pTHNPAFeVxq9x2-g5pTyxtAFg/edit?usp=sharing"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "rivermoon",
      headerLinks: [
        { title:'Home', path:'/' },
        {title:'About', path:'/about'},
        {title:'Contact', path:'/contact'}
      ],
      home: {
        title: "Hello, I\'m Mauricio",
        subTitle: "Welcome to my page",
        text: "Check out my projects below"
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Let's Talk",
      },
      socials: {
        title: "Find me",
      }

    }
  }

  render() {
    return (
      <div>
      <Router className="mainContainer">
        <Container className="p-2" fluid={true} style={{ backgroundColor: "#111" }} >
          <Navbar className="border-bottom" expand="lg" variant="dark" >

            <Navbar.Brand style={{ fontFamily: "Kaushan Script, cursive", fontSize: 35, color: "#c1b" }}>Relentless.</Navbar.Brand>
            <Navbar.Toggle className="ml-auto" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle" style={{ textAlign: "center", color: "#c1b"}}>

              <Nav className="ml-auto" style={{ fontFamily: "Kaushan Script, cursive", fontSize: 25, color: "#72f" }} >
                <Link className="nav-link" to="/" style={{ color: "#c1b", borderRadius:"15px" }} >Home</Link>
                <Link className="nav-link" to="/about"style={{ color: "#c1b", borderRadius:"15px" }} >About</Link>
                <Link className="nav-link" to="/contact" style={{ color: "#c1b", borderRadius:"15px" }} >Contact</Link>
                <a className="nav-link" href="https://docs.google.com/document/d/1a9EUGBGO6NI9d4wfe6pTHNPAFeVxq9x2-g5pTyxtAFg/edit?usp=sharing" rel="noopener noreferrer" target="_blank" style={{ color: "#c1b", borderRadius:"15px" }} >Resume</a>
              </Nav>

            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> } />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle}  /> } />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} /> } />

          <Footer  />

        </Container>
      </Router>
      </div>
    );
  }

}

export default App;
