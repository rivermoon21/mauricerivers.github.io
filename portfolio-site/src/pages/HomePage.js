import React from 'react';
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'

const BOTTOM_STYLE = {
  height: 20,
  minHeight: "75vh",
  zIndex: 2,
}

function HomePage(props) {
  return (
    <div className="rm-title-div" >
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      <Carousel />

      <div style={BOTTOM_STYLE}>
      </div>

    </div>
  );
}

export default HomePage;
