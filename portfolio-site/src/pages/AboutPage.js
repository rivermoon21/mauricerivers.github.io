import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} />
      <Content>
        <p>Hello my name is Mauricio. I am a software engineer that enjoys working with hardware, APIs and web development. I have experience with C, C++, Python and NodeJS.</p>
        <p>My dream is to work on projects that help to democratize technology for the world. The internet has evened out the playing field and it is time that technology reaches the masses.</p>
        <p>I am constantly learning new things. Currently, I am learning how to create Smart Contracts with Solidity on the Ethereum network and how to create trading bots using basic strategies.</p>
        <p>When I am not on my computer, I enjoy to go for a run or to play soccer.</p>
      </Content>
    </div>
  );
}

export default AboutPage;
