import React, { useState } from "react";
import { useSpring, animated } from 'react-spring';
import { SocialIcon } from 'react-social-icons';

import Hero from "../components/Hero";
import Content from "../components/Content";
import Modal from "../components/Modal"

const MODAL_STYLES = {
  flex: 1,
  position: 'relative',
  zIndex:1
}

const BOTTOM_STYLE = {
  height: 400,
  zIndex: 2,
  padding: '10px'
}

function SocialsPage(props) {

  const [isOpen, setIsOpen] = useState(false)

  const handleChange = () => {
    const value = isOpen === true ? setIsOpen(false) : setIsOpen(true);

  }

  return(
    <>
    <div className="rm-title-div">
      <Hero title={props.title} />
    </div>

    <div className="rm-socials" style={MODAL_STYLES}>
    <button onClick={handleChange} type="submit" className="d-inline-block" >
      Click Me!
    </button>
      <Modal open={isOpen} onClose={ () => setIsOpen(false) } >
        <SocialIcon url="https://github.com/rivermoon21" bgColor="#e600e6" style={{ height: 100, width: 100 }} />
        <SocialIcon url="https://www.linkedin.com/in/mrivera93/" bgColor="#e600e6" style={{ height: 100, width: 100 }} />
        <SocialIcon url="https://twitter.com/rivermoon21" bgColor="#e600e6" style={{ height: 100, width: 100 }} />
      </Modal>
    </div>

    <div style={BOTTOM_STYLE}>
    </div>

    </>
  )
}

export default SocialsPage;
