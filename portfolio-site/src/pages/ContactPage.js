import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

import Hero from '../components/Hero';
import Content from '../components/Content';

const BOTTOM_STYLE = {
  height: 20,
  minHeight: "75vh",
  zIndex: 2
}

class ContactPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      messsage: '',
      disabled: '',
      emailSent: '',
      emailSending: ''
    }
  }


  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name

    this.setState({
      [name]: value
    });

  }

  handleSubmit = (e) => {

    e.preventDefault();

    this.setState({
      disabled: true,
      emailSent: false,
      emailSending: true
    });

    emailjs.sendForm('service_oj2aurp', 'template_5meesxz', e.target, 'user_tpRRilzZrxELEY2akDNty')
      .then((result) => {
          console.log(result.text);
            if(result.text === 'OK'){
              this.setState({
                disabled: false,
                emailSent: true,
                emailSending: false
              });
            }
            else {
              this.setState({
                disabled: false,
                emailSent: false,
                emailSending: false
              });
            }
      }, (error) => {
          console.log(error.text);
          this.setState({
            disabled: false,
            emailSent: false,
            emailSending: false
          });
        e.target.reset();
      });
  }

  render() {
    return (
      <div className="rm-title-div">
        <Hero title={this.props.title} />

        <Content>
          <Form onSubmit={this.handleSubmit} >
            <Form.Group>
              <Form.Label htmlFor="full-name">full name</Form.Label>
              <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">email</Form.Label>
              <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="subject">subject</Form.Label>
              <Form.Control id="subject" name="subject" type="subject" value={this.state.subject} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">message</Form.Label>
              <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
            </Form.Group>

              <Button className="d-inline-block" variant="primary" disabled={this.state.disabled} type="submit" style={{ fontFamily: "Andale Mono, monospace", fontSize: 15, backgroundColor: "#e600e6", border: "#e600e6 solid 3px" }} >
              Send
            </Button>

            {this.state.emailSending === true && this.state.emailSent === false && <p className="d-inline sending-msg">Sending...</p>}
            {this.state.emailSending === false && this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
            {this.state.emailSending === false && this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}

          </Form>
        </Content>

        <div style={BOTTOM_STYLE}>
        </div>

      </div>
    );
  }
}

export default ContactPage;
