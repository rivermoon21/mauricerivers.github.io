import React from 'react';
import Card from '../components/Card';
import avatar from '../assets/images/avatar.png';
import satellite from '../assets/images/satellite.png';
import blockchain from '../assets/images/blockchain.png';

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
          title: 'Dev Grub',
          subTitle: 'Cookbook for Developers',
          imgSrc: avatar,
          link: 'https://devgrub.com',
          selected: false
        },
        {
          id:1,
          title: 'rivermoon',
          subTitle: 'Youtube Channel',
          imgSrc: satellite,
          link: 'https://youtube.com',
          selected: false
        },
        {
          id:2,
          title: 'Deverest',
          subTitle: 'Social Media for Developers',
          imgSrc: blockchain,
          link: 'https://github.com',
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
      return <Card item={item} onClick={(e => this.handlerCardClick(item.id, e))} key={item.id} />
    })
  }


  render() {
    return(
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>

      </Container>
    );
  }

}

export default Carousel;
