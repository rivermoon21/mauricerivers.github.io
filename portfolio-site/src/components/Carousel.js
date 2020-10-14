import React from 'react';
import Card from '../components/Card';
import avatar from '../assets/images/avatar.png';
import satellite from '../assets/images/satellite.png';
import blockchain from '../assets/images/blockchain.png';
import chip from '../assets/images/chip.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class Carousel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [
        {
          id:0,
          title: 'Personal',
          subTitle: 'GitHub',
          imgSrc: avatar,
          link: 'https://stackoverflow.com/',
          selected: false
        },
        {
          id:1,
          title: 'Spacecraft',
          subTitle: 'CubeSats',
          imgSrc: satellite,
          link: 'https://youtube.com',
          selected: false
        },
        {
          id:2,
          title: 'Blockchain',
          subTitle: 'Smart Contracts',
          imgSrc: blockchain,
          link: 'https://github.com',
          selected: false
        },
        {
          id:3,
          title: 'Hardware',
          subTitle: 'Embedded Projects',
          imgSrc: chip,
          link: 'https://www.adafruit.com/',
          selected: false
        }
      ]
    }
  }

  handlerCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;
    items.forEach(item => {
      if(item.id !== id){
        item.selected = false;
      }
    });

    this.setState({
      items
    });

  }

  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handlerCardClick(item.id, e))} key={item.id} />
    })
  }


  render() {
    return(
      <Container fluid={true}>
        <Row className="justify-content-center">
          {this.makeItems(this.state.items)}
        </Row>

      </Container>
    );
  }

}

export default Carousel;
