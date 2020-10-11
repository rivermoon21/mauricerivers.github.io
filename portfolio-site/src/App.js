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
        title: "Curious Mindset",
        subTitle: "Projects",
        text: "Check out my projects!"
      },
      about: {
        title: "About Me",
        subTitle: "💻📈⚽",
      },
      contact: {
        title: "Let's Talk",
        subTitle: "☎️",
      }

    }
  }

  render() {
    return (
      <Router >
        <Container className="p-0" fluid={true} style={{ backgroundColor: "#D3A58C" }} >
          <Navbar className="border-bottom" expand="lg" >

            <Navbar.Brand style={{ fontFamily: "Kaushan Script, cursive", fontSize: 30, color: "#DE3636" }}>rivermoon</Navbar.Brand>
            <Navbar.Toggle className="ml-auto" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle" style={{ textAlign: "center"}}>

              <Nav className="ml-auto" style={{ fontFamily: "Kaushan Script, cursive", fontSize: 25, color: "#DE3636" }} >
                <Link className="nav-link" to="/" style={{ color: "#DE3636" }} >Home</Link>
                <Link className="nav-link" to="/about"style={{ color: "#DE3636" }} >About</Link>
                <Link className="nav-link" to="/contact" style={{ color: "#DE3636" }} >Contact</Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} /> } />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle}  /> } />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} /> } />

          <Footer  />

        </Container>

      </Router>
    );
  }

}

export default App;
